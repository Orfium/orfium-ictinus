import React, { ChangeEvent, FC } from 'react';
import Styles from './CheckBoxContainer.style';
import CheckBox from '../../../CheckBox';

interface Props {
  handleCheck?(val: boolean, e: ChangeEvent): void;
  score?: string | number;
  isEnabled: boolean;
}
const CheckBoxContainer: FC<Props> = ({ isEnabled, handleCheck, score }) => {
  const scoreText = `${score}%`;

  return (
    <div css={Styles.checkBoxWrapper}>
      <CheckBox disabled={!isEnabled} filled={false} onClick={handleCheck} />
      {score && (
        <div css={Styles.scoreWrapper}>
          <span css={Styles.score(isEnabled)}>{isEnabled ? scoreText : 'N/A'}</span>
          <span css={Styles.text(isEnabled)}>
            Probability
            <br /> Score
          </span>
        </div>
      )}
    </div>
  );
};

export default CheckBoxContainer;
