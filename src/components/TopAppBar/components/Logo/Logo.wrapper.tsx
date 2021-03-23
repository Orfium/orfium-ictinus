/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Styles from './Logo.style';
import { FC } from 'react';

const PlaceHolder = () => (
  <div css={Styles.placeholderWrapper}>
    <strong>LOGO</strong>PLACEHOLDER
  </div>
);

interface Props {
  logoIcon?: JSX.Element;
}

const LogoWrapper: FC<Props> = ({ logoIcon }) => (
  <div css={Styles.wrapper}>{logoIcon || <PlaceHolder />}</div>
);

export default LogoWrapper;
