import Button from '../../Button';
import Icon from '../../Icon';
import React, { useMemo } from 'react';
import { MatchingAction } from '../types';

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
  enhanceWithWrapperElement: (element: Element) => JSX.Element
) => {
  const actionItems = useMemo(
    () => actions.map(createActionButton).map(enhanceWithWrapperElement),
    [actions, enhanceWithWrapperElement]
  );

  return { actionItems };
};
