import React, { FC } from 'react';
import { MatchingAction } from '../../types';
import PrimaryActions from './PrimaryActions';
import SecondaryActions from './SecondaryActions';
import { flex } from '../../../../theme/functions';

interface Props {
  matchingActions?: MatchingAction[];
}

const Toolbox: FC<Props> = ({ matchingActions = [] }) => {
  return (
    <div css={flex}>
      <PrimaryActions matchingActions={matchingActions} />
      <SecondaryActions matchingActions={matchingActions} />
    </div>
  );
};

export default Toolbox;
