import React, { ChangeEvent, FC } from 'react';
import Styles from './CheckBoxContainer.style';
import CheckBox from '../../../CheckBox';

interface Props {
  handleCheck?(val: boolean, e: ChangeEvent): void;
  score?: string | number;
}
const CheckBoxContainer: FC<Props> = ({ handleCheck, score }) => {
  return (
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
  );
};

export default CheckBoxContainer;
