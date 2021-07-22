import debounce from 'lodash/debounce';
import React, { useMemo, useCallback } from 'react';

import { MatchingAction } from '../types';
import { useSelectedItem } from './SelectedItemContext';
import Button from 'components/Button';
import Icon from 'components/Icon';

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

// eslint-disable-next-line react/display-name
export const createActionButton = (isButtonFilled = false, color: string) => (
  action: MatchingAction
) => (
  <Button
    type={'primary'}
    color={color}
    iconLeft={<Icon color={'inherit'} name={action.icon} />}
    filled={isButtonFilled}
    onClick={action?.onClick}
  >
    {action.text}
  </Button>
);

export const useMatchingActions = (
  actions: MatchingAction[],
  enhanceWithWrapperElement: (actionButton: JSX.Element, index: number) => JSX.Element,
  isButtonFilled = false,
  color = 'neutralWhite-700'
) => {
  const actionItems = useMemo(
    () => actions.map(createActionButton(isButtonFilled, color)).map(enhanceWithWrapperElement),
    [actions, enhanceWithWrapperElement, isButtonFilled]
  );

  return { actionItems };
};
