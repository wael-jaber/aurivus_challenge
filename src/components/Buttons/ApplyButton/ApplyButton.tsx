import React from 'react';

export interface ApplyButtonProps {
  isDisabled: boolean;
}

export function ApplyButton({ isDisabled }: ApplyButtonProps) {
  return (
    <button
      type="submit"
      data-testid="apply-button"
      className={`text-white bg-blue-500 rounded px-4 py-2 text-sm mb-4 ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
      }`}
      disabled={isDisabled}
    >
      Apply
    </button>
  );
}
