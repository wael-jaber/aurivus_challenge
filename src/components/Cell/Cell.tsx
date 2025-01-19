import React from 'react';
import { Cell as CellProps } from '../../types';

export const Cell: React.FC<CellProps & { hideLabel?: boolean }> = ({
  id,
  label,
  hidden,
  highlighted,
  hideLabel,
}) => {
  return (
    <div
      id={`cell-${id}`}
      data-testid={`cell-${id}`}
      className={`w-full h-full flex items-center justify-center text-black
        ${hidden ? 'bg-white' : 'bg-transparent'}
        ${highlighted ? 'border-red-500' : 'border-white'}
        border`}
    >
      <span
        data-testid={`cell-label-${id}`}
        className={`${hidden ? 'opacity-50' : 'opacity-100'} ${hideLabel ? 'hidden' : 'block'}`}
      >
        {label}
      </span>
    </div>
  );
};
