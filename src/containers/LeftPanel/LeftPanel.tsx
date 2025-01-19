import React from 'react';
import { List, ListItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux';
import {
  cellHighlightOff,
  cellHighlightOn,
  toggleCellVisibility,
} from '../../redux/slices/main_slice';
import { AdditionalControls } from '../AdditionalControls';

export function LeftPanel(): React.ReactElement {
  const cells = useSelector((state: RootState) => state.main.cells);
  const dispatch: AppDispatch = useDispatch();

  const handleItemClick = (id: number) => {
    dispatch(toggleCellVisibility(id));
  };

  const handleItemMouseEnter = (id: number) => {
    dispatch(cellHighlightOn(id));
  };

  const handleItemMouseLeave = (id: number) => {
    dispatch(cellHighlightOff(id));
  };

  return (
    <List
      items={Array.from(cells.values())}
      onItemClick={handleItemClick}
      onItemMouseEnter={handleItemMouseEnter}
      onItemMouseLeave={handleItemMouseLeave}
      AdditionalControl={AdditionalControls}
      ItemRender={({
        id,
        label,
        hidden,
        onClick,
        onMouseEnter,
        onMouseLeave,
      }) => (
        <ListItem
          key={id}
          index={id}
          label={label}
          hidden={hidden}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      )}
    />
  );
}
