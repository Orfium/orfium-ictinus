import React, { FC } from 'react';
import Styles from './Toolbox.style';
import { MatchingAction } from '../../types';
import { useMatchingActions } from '../utils';
import { generateUniqueID } from 'utils/helpers';
import { flex } from 'theme/functions';

interface Props {
  primaryActions: MatchingAction[];
}

const PrimaryActions: FC<Props> = ({ primaryActions }) => {
  const { actionItems } = useMatchingActions(primaryActions, actionButton => (
    <div
      data-testid={'primary_action'}
      key={generateUniqueID('primary_action')}
      css={Styles.buttonWrapper}
    >
      {actionButton}
    </div>
  ));

  return <div css={flex}>{actionItems}</div>;
};

export default PrimaryActions;
