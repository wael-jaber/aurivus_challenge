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
    if (!imageDimensions) return false; // Skip validation if no image is uploaded
    const max =
      type === 'rows' ? imageDimensions.height : imageDimensions.width;
    return value < 1 || value >= max; // Valid if value < 1 or exceeds max
  };

  // Handles changes to the input fields and applies validation
  const handleInputChange =
    (setter: (value: number) => void, type: 'rows' | 'cols') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value); // Convert input to a number
      if (!isNaN(value)) {
        setter(value); // Update the value in the parent component
        setErrors((prevErrors) => ({
          ...prevErrors,
          [type]: validateInput(value, type), // Update the error state
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
          type="number"
          className={`border text-black rounded px-2 py-1 text-sm w-full ${
            errors.rows ? 'border-red-500' : 'border-gray-300'
          }`} // Red border if rows validation fails
          value={rows}
          onChange={handleInputChange(onRowsChange, 'rows')}
          disabled={!imageDimensions} // Disabled until image is uploaded
        />
        {errors.rows && imageDimensions && (
          <span className="text-red-500 text-xs mt-1">
            Value must be between 1 and {imageDimensions.height - 1}
          </span> // Error message for invalid rows input
        )}
      </div>

      {/* Cols Input */}
      <div className="flex flex-col mb-4">
        <label htmlFor="cols" className="text-xs text-gray-600 mb-1">
          Cols
        </label>
        <input
          id="cols"
          type="number"
          className={`border text-black rounded px-2 py-1 text-sm w-full ${
            errors.cols ? 'border-red-500' : 'border-gray-300'
          }`} // Red border if cols validation fails
          value={cols}
          onChange={handleInputChange(onColsChange, 'cols')}
          disabled={!imageDimensions} // Disabled until image is uploaded
        />
        {errors.cols && imageDimensions && (
          <span className="text-red-500 text-xs mt-1">
            Value must be between 1 and {imageDimensions.width - 1}
          </span> // Error message for invalid cols input
        )}
      </div>
    </>
  );
}
