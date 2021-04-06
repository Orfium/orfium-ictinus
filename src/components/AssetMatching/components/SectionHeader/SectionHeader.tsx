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
  isButtonFilled?: boolean;
  customCheckboxContent?: JSX.Element;
}

const SectionHeader: FC<Props> = ({
  styleType,
  matchingActions = [],
  onCheck,
  score,
  isButtonFilled = false,
  customCheckboxContent,
}) => {
  const { checked, handleCheck } = useCheck(onCheck);
  const hasActions = matchingActions.length > 0;

  return (
    <header css={Styles.header(checked, styleType)}>
      <CheckBoxContainer
        customContent={customCheckboxContent}
        isChecked={checked}
        isEnabled={hasActions}
        handleCheck={handleCheck}
        score={score}
      />
      {hasActions && (
        <ActionsToolbox matchingActions={matchingActions} isButtonFilled={isButtonFilled} />
      )}
    </header>
  );
};

export default SectionHeader;
