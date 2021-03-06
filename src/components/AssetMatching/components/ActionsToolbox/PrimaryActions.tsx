import React, { FC } from 'react';
import Styles from './ActionsToolbox.style';
import { MatchingAction } from '../../types';
import { useMatchingActions } from '../utils';
import { generateUniqueID } from 'utils/helpers';
import { flex } from 'theme/functions';

interface Props {
  primaryActions: MatchingAction[];
  isButtonFilled?: boolean;
  primaryButtonColor?: string;
}

const PrimaryActions: FC<Props> = ({
  primaryActions,
  isButtonFilled = false,
  primaryButtonColor,
}) => {
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
    isButtonFilled,
    primaryButtonColor
  );

  return <div css={flex}>{actionItems}</div>;
};

export default PrimaryActions;
