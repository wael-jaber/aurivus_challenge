import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCells,
  setCols,
  setRows,
  setImage,
  applyColsAndRows,
} from '../../redux/slices/main_slice';
import { AppDispatch, RootState } from '../../redux';
import { ImageUploader, DimensionInputs, ApplyButton } from '../../components';

export function AdditionalControls(): React.ReactElement {
  const { rows, cols, appliedCellNumber } = useSelector(
    (state: RootState) => state.main
  );
  const dispatch: AppDispatch = useDispatch();

  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const handleImageUpload = (
    file: File,
    dimensions: { width: number; height: number }
  ) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        dispatch(setImage(reader.result as string));
        setImageDimensions(dimensions);
        dispatch(setCols(1));
        dispatch(setRows(1));
        dispatch(createCells(1));
        dispatch(applyColsAndRows());
      }
    };
    reader.readAsDataURL(file);
  };

  const handleApplyClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(createCells(rows * cols));
    dispatch(applyColsAndRows());
  };

  const isApplyButtonDisabled = () => {
    if (!imageDimensions || rows <= 0 || cols <= 0) return true;
    return rows >= imageDimensions.height || cols >= imageDimensions.width;
  };

  return (
    <div className="w-full flex flex-col">
      <form className="flex flex-col mt-4 px-1" onSubmit={handleApplyClick}>
        <ImageUploader onImageUpload={handleImageUpload} />
        <DimensionInputs
          rows={rows}
          cols={cols}
          imageDimensions={imageDimensions}
          onRowsChange={(value) => dispatch(setRows(value))}
          onColsChange={(value) => dispatch(setCols(value))}
        />
        <ApplyButton isDisabled={isApplyButtonDisabled()} />
      </form>

      <hr className="my-4 border-gray-300" />

      <div className="flex">
        <button
          className="text-blue-800 border-none bg-transparent mr-auto text-xs hover:underline"
          onClick={() => dispatch(createCells(appliedCellNumber))}
        >
          Clear All ({appliedCellNumber})
        </button>
      </div>
    </div>
  );
}
