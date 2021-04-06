import Button from 'components/Button';
import Icon from 'components/Icon';
import React, { useMemo, useCallback } from 'react';
import { MatchingAction } from '../types';
import { useSelectedItem } from './SelectedItemContext';
import debounce from 'lodash/debounce';

const SEARCH_REG_EXPRESSION = /\s/g;
const REPLACE_WITH = '-';

export const useCategoryItemActions = (item: string, matchedCategoryItems?: string[]) => {
  const isItemMatched = useMemo(() => matchedCategoryItems?.includes(item) || false, [
    matchedCategoryItems,
  ]);
  const [selected, setSelected] = useSelectedItem();

  const itemId = `${item?.replace(SEARCH_REG_EXPRESSION, REPLACE_WITH).toLocaleLowerCase()}`;

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

export const createActionButton = (filled = false) => (action: MatchingAction) => (
  <Button
    type={'primary'}
    color={'neutralBlack-700'}
    iconLeft={<Icon color={'inherit'} name={action.icon} />}
    filled={filled}
    onClick={action?.onClick}
  >
    {action.text}
  </Button>
);

export const useMatchingActions = (
  actions: MatchingAction[],
  enhanceWithWrapperElement: (actionButton: JSX.Element, index: number) => JSX.Element,
  actionButtonFill = false
) => {
  const actionItems = useMemo(
    () => actions.map(createActionButton(actionButtonFill)).map(enhanceWithWrapperElement),
    [actions, enhanceWithWrapperElement, actionButtonFill]
  );

  return { actionItems };
};
