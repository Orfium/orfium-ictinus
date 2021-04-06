import React, { FC } from 'react';
import Styles from './Toolbox.style';
import { MatchingAction } from '../../types';
import { useMatchingActions } from '../utils';
import { generateUniqueID } from 'utils/helpers';
import { flex } from 'theme/functions';

interface Props {
  primaryActions: MatchingAction[];
  actionButtonFill?: boolean;
}

const PrimaryActions: FC<Props> = ({ primaryActions, actionButtonFill = false }) => {
  const { actionItems } = useMatchingActions(
    primaryActions,
    (actionButton, index) => (
      <div
        data-testid={'primary_action'}
        key={`${generateUniqueID('primary_action')}_${index}`}
        css={Styles.buttonWrapper}
      >
        {actionButton}
      </div>
    ),
    actionButtonFill
  );

  return <div css={flex}>{actionItems}</div>;
};

export default PrimaryActions;
