import React, { useState, useEffect } from 'react';
import { Cell } from '../../types';

export interface CellRasterProps<T extends Cell> {
  cols: number;
  rows: number;
  image: string | null; // Base64 or URL string
  cells: T[];
  cellComponent?: React.FC<T>;
}

export const RasterDefaultCell: React.FC<Cell> = ({
  label,
  hidden,
  highlighted,
}) => {
  return (
    <div
      className="flex items-center justify-center border border-gray-300"
      style={{ width: '100%', height: '100%' }}
    >
      <div className="text-center">
        <div>{label}</div>
        <div className="text-sm text-gray-600">
          {hidden && 'Hidden'}
          {hidden && highlighted && ' & '}
          {highlighted && 'Highlighted'}
        </div>
      </div>
    </div>
  );
};

export const CellRaster = <T extends Cell>({
  cols,
  rows,
  image,
  cells,
  cellComponent,
}: CellRasterProps<T>) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  const CellComponent = cellComponent || (RasterDefaultCell as React.FC<T>);

  // Dynamically calculate the aspect ratio of the image
  useEffect(() => {
    const img = new Image();
    img.src = image ?? '';
    img.onload = () => {
      setAspectRatio(img.width / img.height);
    };
  }, [image]);

  if (aspectRatio === null) {
    return <div>Loading...</div>; // Show a loading state while calculating the aspect ratio
  }

  return (
    <div
      className="grid"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: '100%',
        aspectRatio: `${aspectRatio}`,
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain', // Ensure the full image is always visible
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {cells.map((cell) => (
        <CellComponent key={cell.id} {...cell} />
      ))}
    </div>
  );
};
