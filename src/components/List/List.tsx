import React from 'react';

export type ListItemRendererProps<T> = {
  onMouseEnter: (id: number) => void;
  onMouseLeave: (id: number) => void;
  onClick: (id: number) => void;
} & T;

export interface ListProps<T extends { id: number }> {
  items: T[];
  ItemRender: React.FC<ListItemRendererProps<T>>;
  onItemClick: (id: number) => void;
  onItemMouseEnter: (id: number) => void;
  onItemMouseLeave: (id: number) => void;
  AdditionalControl?: React.ComponentType;
}

export const List = <T extends { id: number }>({
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
        {items.map((item) => (
          <ItemRender
            key={item.id}
            {...item}
            onMouseEnter={() => onItemMouseEnter(item.id)}
            onMouseLeave={() => onItemMouseLeave(item.id)}
            onClick={() => onItemClick(item.id)}
            data-testid={`list-item-${item.id}`}
          />
        ))}
      </ul>
    </div>
  );
};
