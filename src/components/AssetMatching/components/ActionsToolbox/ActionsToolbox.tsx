import React, { FC } from 'react';
import { MatchingAction } from '../../types';
import PrimaryActions from './PrimaryActions';
import SecondaryActions from './SecondaryActions';
import { flex } from 'theme/functions';

interface Props {
  matchingActions?: MatchingAction[];
  actionButtonFill?: boolean;
}

const ActionsToolbox: FC<Props> = ({ matchingActions = [], actionButtonFill = false }) => {
  const primaryActions = matchingActions.slice(0, 2);
  const secondaryActions = matchingActions.slice(2, matchingActions.length);

  return (
    <div css={flex}>
      {hasActions(primaryActions) && (
        <PrimaryActions actionButtonFill={actionButtonFill} primaryActions={primaryActions} />
      )}
      {hasActions(secondaryActions) && (
        <SecondaryActions actionButtonFill={actionButtonFill} secondaryActions={secondaryActions} />
      )}
    </div>
  );
};

function hasActions(actions: MatchingAction[]) {
  return actions.length > 0;
}

export default ActionsToolbox;
