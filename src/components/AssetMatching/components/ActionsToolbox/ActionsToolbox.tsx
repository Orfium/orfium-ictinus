import React, { FC } from 'react';

import { MatchingAction } from '../../types';
import ActionsToolboxWrapper from './ActionsToolboxWrapper';
import PrimaryActions from './PrimaryActions';
import SecondaryActions from './SecondaryActions';

interface Props {
  matchingActions?: MatchingAction[];
  buttonStyles?: {
    secondaryButtonColor?: string;
    primaryButtonColor?: string;
    isButtonFilled?: boolean;
    isButtonTransparent?: boolean;
  };
  customActionsContent?: JSX.Element | null;
}

const ActionsToolbox: FC<Props> = ({
  customActionsContent,
  matchingActions = [],
  buttonStyles,
}) => {
  const shouldDisplayOnlyPrimaryActions =
    matchingActions?.length > 0 && matchingActions?.length <= 3;

  if (shouldDisplayOnlyPrimaryActions) {
    return (
      <ActionsToolboxWrapper customActionsContent={customActionsContent}>
        <PrimaryActions {...(buttonStyles || {})} primaryActions={matchingActions} />
      </ActionsToolboxWrapper>
    );
  }

  const primaryActions = matchingActions.slice(0, 2);
  const secondaryActions = matchingActions.slice(2, matchingActions.length);

  return (
    <ActionsToolboxWrapper customActionsContent={customActionsContent}>
      {hasActions(primaryActions) && (
        <PrimaryActions {...(buttonStyles || {})} primaryActions={primaryActions} />
      )}
      {hasActions(secondaryActions) && (
        <SecondaryActions {...(buttonStyles || {})} secondaryActions={secondaryActions} />
      )}
    </ActionsToolboxWrapper>
  );
};

function hasActions(actions: MatchingAction[]) {
  return actions.length > 0;
}

export default ActionsToolbox;
