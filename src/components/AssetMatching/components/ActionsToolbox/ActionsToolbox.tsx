import React, { FC } from 'react';
import { MatchingAction } from '../../types';
import PrimaryActions from './PrimaryActions';
import SecondaryActions from './SecondaryActions';
import { flex } from 'theme/functions';

interface Props {
  matchingActions?: MatchingAction[];
  buttonStyles?: {
    secondaryButtonColor?: string;
    primaryButtonColor?: string;
    isButtonFilled?: boolean;
  };
  customActionsContent?: JSX.Element | null;
}

const ActionsToolbox: FC<Props> = ({
  customActionsContent,
  matchingActions = [],
  buttonStyles,
}) => {
  const primaryActions = matchingActions.length > 3 ? matchingActions.slice(0, 2) : matchingActions;
  const secondaryActions =
    matchingActions.length > 3 ? matchingActions.slice(2, matchingActions.length) : [];

  return (
    <div css={flex}>
      {hasActions(primaryActions) && (
        <PrimaryActions {...(buttonStyles || {})} primaryActions={primaryActions} />
      )}
      {hasActions(secondaryActions) && (
        <SecondaryActions {...(buttonStyles || {})} secondaryActions={secondaryActions} />
      )}
      {customActionsContent && customActionsContent}
    </div>
  );
};

function hasActions(actions: MatchingAction[]) {
  return actions.length > 0;
}

export default ActionsToolbox;
