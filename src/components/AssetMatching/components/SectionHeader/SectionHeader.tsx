/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ChangeEvent, FC } from 'react';
import Styles from './SectionHeader.style';
import { Toolbox } from '../Toolbox';
import { useCheck } from '../../../../hooks/useCheck';
import { CheckBoxContainer } from '../CheckBoxContainer';
import { MatchingAction } from '../../types';
import { formFieldStyles } from '../../../../theme/palette';

interface Props {
  onCheck?(val: boolean, e: ChangeEvent): void;
  score?: string | number;
  matchingActions?: MatchingAction[];
  styleType: formFieldStyles;
}

const SectionHeader: FC<Props> = ({ styleType, matchingActions = [], onCheck, score }) => {
  const { checked, handleCheck } = useCheck(onCheck);
  const hasActions = matchingActions.length > 0;

  return (
    <header css={Styles.header(checked, styleType)}>
      <CheckBoxContainer isEnabled={hasActions} handleCheck={handleCheck} score={score} />
      {hasActions && <Toolbox matchingActions={matchingActions} />}
    </header>
  );
};

export default SectionHeader;
