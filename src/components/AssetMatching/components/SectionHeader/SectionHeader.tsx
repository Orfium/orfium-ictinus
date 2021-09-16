import { OnCheckHandler, useCheck } from 'hooks/useCheck';
import React, { FC } from 'react';
import { formFieldStyles } from 'theme/palette';

import { MatchingAction } from '../../types';
import { ActionsToolbox } from '../ActionsToolbox';
import { CheckBoxContainer } from '../CheckBoxContainer';
import Styles from './SectionHeader.style';

interface Props {
  onCheck?: OnCheckHandler;
  score?: string | number;
  matchingActions?: MatchingAction[];
  styleType: formFieldStyles;
  buttonStyles?: {
    secondaryButtonColor?: string;
    primaryButtonColor?: string;
    isButtonFilled?: boolean;
    isButtonTransparent?: boolean;
  };
  customCheckboxContent?: JSX.Element | null;
  isChecked?: boolean;
  isIntermediateStatus?: boolean;
  isBulkSection?: boolean;
  customActionsContent?: JSX.Element | null;
  isCheckboxEnabled?: boolean;
}

const SectionHeader: FC<Props> = ({
  styleType,
  matchingActions = [],
  onCheck,
  score,
  buttonStyles,
  customCheckboxContent,
  isChecked = false,
  isBulkSection = false,
  isIntermediateStatus = false,
  customActionsContent,
  isCheckboxEnabled = true,
}) => {
  const { checked, handleCheck } = useCheck(isChecked, onCheck);

  return (
    <header css={Styles.header(checked, styleType, isBulkSection)}>
      <CheckBoxContainer
        isIntermediateStatus={isIntermediateStatus}
        customCheckboxContent={customCheckboxContent}
        isChecked={checked}
        isEnabled={isCheckboxEnabled}
        handleCheck={handleCheck}
        score={score}
      />

      <ActionsToolbox
        customActionsContent={customActionsContent}
        matchingActions={matchingActions}
        buttonStyles={buttonStyles}
      />
    </header>
  );
};

export default SectionHeader;
