import debounce from 'lodash/debounce';
import React, { useCallback, useMemo } from 'react';

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

export const createActionButton = (
  isButtonFilled = false,
  color: string,
  isButtonTransparent: boolean | undefined
  // eslint-disable-next-line react/display-name
) => (action: MatchingAction) => {
  const isTransparent = typeof isButtonTransparent === 'undefined' || isButtonTransparent;

  return (
    <Button
      type={'primary'}
      color={!isTransparent ? undefined : color}
      iconLeft={<Icon color={!isTransparent ? 'primary' : 'inherit'} name={action.icon} />}
      filled={isButtonFilled}
      onClick={action?.onClick}
      transparent={isTransparent}
    >
      {action.text}
    </Button>
  );
};

export const useMatchingActions = (
  actions: MatchingAction[],
  enhanceWithWrapperElement: (actionButton: JSX.Element, index: number) => JSX.Element,
  isButtonFilled = false,
  color = 'neutralWhite-500',
  isButtonTransparent: boolean | undefined
) => {
  const actionItems = useMemo(
    () =>
      actions.map((action, index) =>
        enhanceWithWrapperElement(
          createActionButton(isButtonFilled, color, isButtonTransparent)(action),
          index
        )
      ),
    [actions, enhanceWithWrapperElement, isButtonFilled]
  );

  return { actionItems, actions };
};
