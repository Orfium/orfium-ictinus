/** @jsx jsx */
import { jsx } from '@emotion/core';
import Styles from './Logo.style';

const PlaceHolder = () => (
  <div css={Styles.placeholderWrapper}>
    <strong>LOGO</strong>PLACEHOLDER
  </div>
);

interface Props {
  logoIcon?: JSX.Element;
}

const LogoWrapper = ({ logoIcon }: Props) => {
  const hasLogoIcon = Boolean(logoIcon);

  return <div css={Styles.wrapper({ hasLogoIcon })}>{logoIcon || <PlaceHolder />}</div>;
};

export default LogoWrapper;
