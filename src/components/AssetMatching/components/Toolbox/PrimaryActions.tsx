import React, { FC } from 'react';
import Styles from './Toolbox.style';
import { MatchingAction } from '../../types';
import { createActionButton } from '../utils';
import { generateUniqueID } from '../../../../utils/helpers';
import { Flex } from './Toolbox.style';

interface Props {
  matchingActions: MatchingAction[];
}

const PrimaryActions: FC<Props> = ({ matchingActions }) => {
  const primaryActions = matchingActions.slice(0, 2);

  return (
    <Flex>
      {primaryActions.map(createActionButton('primary')).map(actionButton => (
        <div key={generateUniqueID()} css={Styles.buttonWrapper}>
          {actionButton}
        </div>
      ))}
    </Flex>
  );
};

export default PrimaryActions;
