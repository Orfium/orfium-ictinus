import Button from '../../Button';
import Icon from '../../Icon';
import React, { useMemo, useCallback } from 'react';
import { MatchingAction } from '../types';
import { useSelectedItem } from './SelectedItemContext';

export const useCategoryItemActions = (item: string | null) => {
  const [selected, setSelected] = useSelectedItem();
  const itemId = `${item?.replace(' ', '_').toLocaleLowerCase()}`;

  const onHover = useCallback(() => setSelected(itemId), [itemId, setSelected]);

  const onLeave = useCallback(() => setSelected(null), [setSelected]);

  return {
    onHover,
    onLeave,
    selected,
    itemId,
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
