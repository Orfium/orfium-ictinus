/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ChangeEvent, FC, Fragment } from 'react';
import Styles from './CheckBoxContainer.style';
import CheckBox from 'components/CheckBox';

interface Props {
  handleCheck?(val: boolean, e: ChangeEvent): void;
  score?: string | number;
  isEnabled: boolean;
  isChecked: boolean;
  customContent?: JSX.Element;
}
const CheckBoxContainer: FC<Props> = ({
  isChecked,
  isEnabled,
  handleCheck,
  score,
  customContent,
}) => {
  const scoreText = `${score}%`;
  const defaultContent = Boolean(score) && (
    <Fragment>
      <span css={Styles.score(isEnabled)}>{isEnabled ? scoreText : 'N/A'}</span>
      <span css={Styles.text(isEnabled)}>
        Probability
        <br /> Score
      </span>
    </Fragment>
  );

  return (
    <div css={Styles.checkBoxWrapper}>
      <CheckBox disabled={!isEnabled} filled={isChecked} onClick={handleCheck} />
      <div css={Styles.scoreWrapper}>{customContent || defaultContent}</div>
    </div>
  );
};

export default CheckBoxContainer;
