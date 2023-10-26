import React, { FCC } from 'react';

import Styles from './Logo.style';

const PlaceHolder = () => (
  <div css={Styles.placeholderWrapper}>
    <strong>LOGO</strong>PLACEHOLDER
  </div>
);

interface LogoWrapperProps {
  logoIcon?: JSX.Element;
}

const LogoWrapper: FCC<LogoWrapperProps> = ({ logoIcon }) => (
  <div css={Styles.wrapper}>{logoIcon || <PlaceHolder />}</div>
);

export default LogoWrapper;
