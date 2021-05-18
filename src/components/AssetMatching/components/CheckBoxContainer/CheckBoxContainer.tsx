import CheckBox from 'components/CheckBox';
import React, { ChangeEvent, FC, Fragment } from 'react';
import Styles from './CheckBoxContainer.style';

interface Props {
  handleCheck?(val: boolean, e: ChangeEvent): void;
  score?: string | number;
  isEnabled: boolean;
  isChecked: boolean;
  customCheckboxContent?: JSX.Element | null;
  isIntermediateStatus?: boolean;
}
const CheckBoxContainer: FC<Props> = ({
  isChecked,
  isEnabled,
  handleCheck,
  score,
  customCheckboxContent,
  isIntermediateStatus = false,
}) => {
  const scoreText = `${score}%`;
  const defaultContent = !customCheckboxContent && (
    <Fragment>
      <span css={Styles.score(isEnabled)}>{score ? scoreText : 'N/A'}</span>
      <span css={Styles.text(isEnabled)}>
        Probability
        <br /> Score
      </span>
    </Fragment>
  );

  return (
    <div css={Styles.checkBoxWrapper}>
      <CheckBox
        intermediate={isIntermediateStatus}
        disabled={!isEnabled}
        filled={isChecked}
        checked={isChecked}
        onClick={handleCheck}
      />
      <div css={Styles.scoreWrapper}>{customCheckboxContent || defaultContent}</div>
    </div>
  );
};

export default CheckBoxContainer;
