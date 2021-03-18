import React, { ChangeEvent, FC } from 'react';
import Styles from './SectionHeader.style';
import { Toolbox } from '../Toolbox';
import { useCheck } from '../../../../hooks/useCheck';
import { CheckBoxContainer } from '../CheckBoxContainer';
import { MatchingAction } from '../../types';

interface Props {
  onCheck?(val: boolean, e: ChangeEvent): void;
  score?: string | number;
  matchingActions: MatchingAction[];
}

const SectionHeader: FC<Props> = ({ matchingActions, onCheck, score }) => {
  const { checked, handleCheck } = useCheck(onCheck);

  return (
    <header css={Styles.header(checked)}>
      <CheckBoxContainer handleCheck={handleCheck} score={score} />
      <Toolbox matchingActions={matchingActions} />
    </header>
  );
};

export default SectionHeader;
