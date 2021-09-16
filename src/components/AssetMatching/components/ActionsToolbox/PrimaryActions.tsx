import React, { FC } from 'react';
import { flex } from 'theme/functions';
import { generateUniqueID } from 'utils/helpers';

import { MatchingAction } from '../../types';
import { useMatchingActions } from '../utils';
import Styles from './ActionsToolbox.style';

interface Props {
  primaryActions: MatchingAction[];
  isButtonFilled?: boolean;
  isButtonTransparent?: boolean;
  primaryButtonColor?: string;
}

const PrimaryActions: FC<Props> = ({
  primaryActions,
  isButtonFilled = false,
  isButtonTransparent,
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
    primaryButtonColor,
    isButtonTransparent
  );

  return <div css={flex}>{actionItems}</div>;
};

export default PrimaryActions;
