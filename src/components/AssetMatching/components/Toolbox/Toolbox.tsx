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
      {/*TODO:if secondary actions === 1 display only the icon btn of this action without text*/}
      <SecondaryActions matchingActions={matchingActions} />
    </div>
  );
};

export default Toolbox;
