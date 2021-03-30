import React, { FC } from 'react';
import { MatchingAction } from '../../types';
import PrimaryActions from './PrimaryActions';
import SecondaryActions from './SecondaryActions';
import { flex } from 'theme/functions';

interface Props {
  matchingActions?: MatchingAction[];
}

const Toolbox: FC<Props> = ({ matchingActions = [] }) => {
  const primaryActions = matchingActions.slice(0, 2);
  const secondaryActions = matchingActions.slice(2, matchingActions.length);

  return (
    <div css={flex}>
      {hasActions(primaryActions) && <PrimaryActions primaryActions={primaryActions} />}
      {hasActions(secondaryActions) && <SecondaryActions secondaryActions={secondaryActions} />}
    </div>
  );
};

function hasActions(actions: MatchingAction[]) {
  return actions.length > 0;
}

export default Toolbox;
