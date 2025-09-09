import type { FCC } from 'react';
import React from 'react';

import Styles from './Logo.style';

const PlaceHolder = () => (
  <div css={Styles.placeholderWrapper}>
    <strong>LOGO</strong>PLACEHOLDER
  </div>
);

interface LogoWrapperProps {
  logoIcon?: React.JSX.Element;
}

const LogoWrapper: FCC<LogoWrapperProps> = ({ logoIcon }) => (
  <div css={Styles.wrapper}>{logoIcon || <PlaceHolder />}</div>
);

export default LogoWrapper;
