import React, { FC } from 'react';
import { Flex } from './Toolbox.style';
import { MatchingAction } from '../../types';
import PrimaryActions from './PrimaryActions';
import SecondaryActions from './SecondaryActions';

interface Props {
  matchingActions: MatchingAction[];
}

const Toolbox: FC<Props> = ({ matchingActions = [] }) => {
  return (
    <Flex>
      <PrimaryActions matchingActions={matchingActions} />
      <SecondaryActions matchingActions={matchingActions} />
    </Flex>
  );
};

export default Toolbox;
