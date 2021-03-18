import React, { ChangeEvent, FC } from 'react';
import CheckBox from '../../../CheckBox';
import Styles from './SectionHeader.style';
import { Toolbox } from '../Toolbox';
import { useCheck } from '../../../../hooks/useCheck';

interface Props {
  onCheck?(val: boolean, e: ChangeEvent): void;
  score?: string | number;
}

const SectionHeader: FC<Props> = ({ onCheck, score }) => {
  const { checked, handleCheck } = useCheck(onCheck);

  return (
    <header css={Styles.header(checked)}>
      <div css={Styles.checkBoxWrapper}>
        <CheckBox onClick={handleCheck} />
        {score && (
          <div css={Styles.scoreWrapper}>
            <span css={Styles.score}>{score}%</span>
            <span css={Styles.text}>
              Probability
              <br /> Score
            </span>
          </div>
        )}
      </div>
      <Toolbox
        utils={[
          { text: 'Confirm', icon: 'check' },
          { text: 'Reject', icon: 'close' },
        ]}
      />
    </header>
  );
};

export default SectionHeader;
