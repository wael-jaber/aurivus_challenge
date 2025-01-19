import React from 'react';

export type ListItemRendererProps = {
  /** item onMouseEnter event callback */
  onMouseEnter: (id: number) => void;
  /** item onMouseLeave event callback */
  onMouseLeave: (id: number) => void;
  /** item onClick event callback */
  onClick: (id: number) => void;
};

export interface ListProps<T> {
  /** Array of items for the list */
  items: T[];
  /** renderer component for the items */
  ItemRender: React.FC<T & ListItemRendererProps>;
  /** item OnClick event callback */
  onItemClick: (index: number) => void;
  /** item onMouseEnter event callback */
  onItemMouseEnter: (index: number) => void;
  /** item onMouseLeave event callback */
  onItemMouseLeave: (index: number) => void;
  /** additional control element will be displayed on top of the list */
  AdditionalControl?: React.ComponentType;
}

export const List = <T,>({
  items,
  ItemRender,
  onItemClick,
  onItemMouseEnter,
  onItemMouseLeave,
  AdditionalControl,
}: ListProps<T>): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col" data-testid="list-container">
      {AdditionalControl ? (
        <div data-testid="additional-control">
          <AdditionalControl />
        </div>
      ) : null}
      <ul
        className="w-full flex-grow max-h-full overflow-y-auto list-none"
        data-testid="list-items"
      >
        {items.map((item, index) => (
          <ItemRender
            key={index}
            {...item}
            onMouseEnter={() => onItemMouseEnter(index)}
            onMouseLeave={() => onItemMouseLeave(index)}
            onClick={() => onItemClick(index)}
            data-testid={`list-item-${index}`}
          />
        ))}
      </ul>
    </div>
  );
};
