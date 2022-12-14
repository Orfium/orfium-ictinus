import React, { FC } from 'react';

import Styles from './Logo.style';

const PlaceHolder = () => (
  <div css={Styles.placeholderWrapper}>
    <strong>LOGO</strong>PLACEHOLDER
  </div>
);

interface LogoWrapperProps {
  logoIcon?: JSX.Element;
}

const LogoWrapper: FC<LogoWrapperProps> = ({ logoIcon }) => (
  <div css={Styles.wrapper}>{logoIcon || <PlaceHolder />}</div>
);

export default LogoWrapper;
