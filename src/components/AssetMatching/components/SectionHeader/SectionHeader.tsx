/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import Styles from './SectionHeader.style';
import { ActionsToolbox } from '../ActionsToolbox';
import { OnCheckHandler, useCheck } from 'hooks/useCheck';
import { CheckBoxContainer } from '../CheckBoxContainer';
import { MatchingAction } from '../../types';
import { formFieldStyles } from 'theme/palette';

interface Props {
  onCheck?: OnCheckHandler;
  score?: string | number;
  matchingActions?: MatchingAction[];
  styleType: formFieldStyles;
  buttonStyles?: {
    secondaryButtonColor?: string;
    primaryButtonColor?: string;
    isButtonFilled?: boolean;
  };
  customCheckboxContent?: JSX.Element | null;
  isChecked?: boolean;
  isIntermediateStatus?: boolean;
  isBulkSection?: boolean;
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
}) => {
  const { checked, handleCheck } = useCheck(isChecked, onCheck);
  const hasActions = matchingActions.length > 0;

  return (
    <header css={Styles.header(checked, styleType, isBulkSection)}>
      <CheckBoxContainer
        isIntermediateStatus={isIntermediateStatus}
        customCheckboxContent={customCheckboxContent}
        isChecked={checked}
        isEnabled={Boolean(score || customCheckboxContent)}
        handleCheck={handleCheck}
        score={score}
      />
      {hasActions && (
        <ActionsToolbox matchingActions={matchingActions} buttonStyles={buttonStyles} />
      )}
    </header>
  );
};

export default SectionHeader;
