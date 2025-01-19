import React from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

export interface ListItemProps {
  /** item index, can be used as id */
  index: number;
  /** item label */
  label: string;
  /** item visible icon control */
  hidden: boolean;
  /** item onMouseEnter event callback */
  onMouseEnter: (index: number) => void;
  /** item onMouseLeave event callback */
  onMouseLeave: (index: number) => void;
  /** item onClick event callback */
  onClick: (index: number) => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  index,
  label,
  hidden,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <li
      className={`flex items-center p-1 transition rounded-md ${
        hidden ? 'hover:bg-blue-50' : 'hover:bg-blue-100'
      }`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
      data-testid={`list-item-${index}`}
    >
      <button
        onClick={() => onClick(index)}
        className="flex items-center w-full bg-transparent"
        aria-label={`Toggle visibility for ${label}`}
        data-testid={`toggle-button-${index}`}
      >
        {hidden ? (
          <>
            <EyeSlashIcon
              className="w-5 h-5 text-black mr-3"
              data-testid={`eye-slash-icon-${index}`}
            />
            <span className="text-gray-800" data-testid={`label-${index}`}>
              {label}
            </span>
          </>
        ) : (
          <>
            <EyeIcon
              className="w-5 h-5 text-black mr-3"
              data-testid={`eye-icon-${index}`}
            />
            <span className="text-gray-500" data-testid={`label-${index}`}>
              {label}
            </span>
          </>
        )}
      </button>
    </li>
  );
};
