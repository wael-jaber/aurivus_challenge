import React from 'react';

export interface ApplyButtonProps {
  isDisabled: boolean;
}

export function ApplyButton({ isDisabled }: ApplyButtonProps) {
  return (
    <button
      type="submit"
      className={`text-white bg-blue-500 rounded px-4 py-2 text-sm hover:bg-blue-600 mb-4 ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={isDisabled}
    >
      Apply
    </button>
  );
}
