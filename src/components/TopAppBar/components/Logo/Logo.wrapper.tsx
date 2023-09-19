import React, { FC } from 'react';

import Styles from './Logo.style';

const PlaceHolder = () => (
  <div css={Styles.placeholderWrapper}>
    <strong>LOGO</strong>PLACEHOLDER
  </div>
);

interface Props {
  logoIcon?: React.ReactElement;
}

const LogoWrapper: FC<Props> = ({ logoIcon }) => (
  <div css={Styles.wrapper}>{logoIcon || <PlaceHolder />}</div>
);

export default LogoWrapper;
