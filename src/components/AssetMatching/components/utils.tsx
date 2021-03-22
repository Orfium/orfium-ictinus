import Button from '../../Button';
import Icon from '../../Icon';
import React, { useMemo, useCallback } from 'react';
import { MatchingAction } from '../types';
import { useSelectedItem } from './SelectedItemContext';
import debounce from 'lodash/debounce';

export const useCategoryItemActions = (item: string, matchedCategoryItems?: string[]) => {
  const isItemMatched = useMemo(() => matchedCategoryItems?.includes(item) || false, [
    matchedCategoryItems,
  ]);
  const [selected, setSelected] = useSelectedItem();
  const searchRegExp = /\s/g;
  const replaceWith = '-';
  const itemId = `${item?.replace(searchRegExp, replaceWith).toLocaleLowerCase()}`;

  const updateSelected = useCallback(
    (value: string | null) =>
      debounce(() => {
        if (isItemMatched) {
          setSelected(value);
        }
      }, 150),
    [isItemMatched, setSelected]
  );

  return {
    onHover: updateSelected(itemId),
    onLeave: updateSelected(null),
    itemId,
    isSelected: selected === itemId,
    isItemMatched,
  };
};

export const createActionButton = (action: MatchingAction) => (
  <Button
    type={'primary'}
    color={'neutralBlack-700'}
    iconLeft={<Icon color={'inherit'} name={action.icon} />}
    filled={false}
    onClick={action?.onClick}
  >
    {action.text}
  </Button>
);

export const useMatchingActions = (
  actions: MatchingAction[],
  enhanceWithWrapperElement: (actionButton: JSX.Element) => JSX.Element
) => {
  const actionItems = useMemo(
    () => actions.map(createActionButton).map(enhanceWithWrapperElement),
    [actions, enhanceWithWrapperElement]
  );

  return { actionItems };
};
