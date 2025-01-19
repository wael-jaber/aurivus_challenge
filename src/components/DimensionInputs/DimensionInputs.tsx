import React, { useState } from 'react';

export interface DimensionInputsProps {
  /** Controlled value for the rows */
  rows: number;
  /** Controlled value for the cols */
  cols: number;
  /** Controlled value for the dimensions for error detection */
  imageDimensions: { width: number; height: number } | null;
  /** Row value input change callback */

  onRowsChange: (value: number) => void;
  /** Col value input change callback */
  onColsChange: (value: number) => void;
}

export function DimensionInputs({
  rows,
  cols,
  imageDimensions,
  onRowsChange,
  onColsChange,
}: DimensionInputsProps) {
  const [errors, setErrors] = useState<{ rows: boolean; cols: boolean }>({
    rows: false,
    cols: false,
  });

  // Validates whether the input value is within the acceptable range
  const validateInput = (value: number, type: 'rows' | 'cols') => {
    if (imageDimensions) {
      const max =
        type === 'rows' ? imageDimensions.height : imageDimensions.width;
      return value < 1 || value >= max;
    }
    return false;
  };

  const handleInputChange =
    (setter: (value: number) => void, type: 'rows' | 'cols') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      if (!isNaN(value)) {
        setter(value);
        setErrors((prev) => ({
          ...prev,
          [type]: validateInput(value, type),
        }));
      }
    };

  return (
    <>
      {/* Rows Input */}
      <div className="flex flex-col mb-4">
        <label htmlFor="rows" className="text-xs text-gray-600 mb-1">
          Rows
        </label>
        <input
          id="rows"
          data-testid="rows-input"
          type="number"
          className={`border text-black rounded px-2 py-1 text-sm w-full ${
            errors.rows ? 'border-red-500' : 'border-gray-300'
          }`} // Red border if rows validation fails
          value={rows}
          onChange={handleInputChange(onRowsChange, 'rows')}
          disabled={!imageDimensions} // Disabled until image is uploaded
        />
        {errors.rows && imageDimensions && (
          <span data-testid="rows-error" className="text-red-500 text-xs mt-1">
            Value must be between 1 and {imageDimensions.height - 1}
          </span>
        )}
      </div>

      {/* Cols Input */}
      <div className="flex flex-col mb-4">
        <label htmlFor="cols" className="text-xs text-gray-600 mb-1">
          Cols
        </label>
        <input
          id="cols"
          data-testid="cols-input"
          type="number"
          className={`border text-black rounded px-2 py-1 text-sm w-full ${
            errors.cols ? 'border-red-500' : 'border-gray-300'
          }`}
          value={cols}
          onChange={handleInputChange(onColsChange, 'cols')}
          disabled={!imageDimensions}
        />
        {errors.cols && imageDimensions && (
          <span data-testid="cols-error" className="text-red-500 text-xs mt-1">
            Value must be between 1 and {imageDimensions.width - 1}
          </span> // Error message for invalid cols input
        )}
      </div>
    </>
  );
}
