/** @jsx jsx */
import { jsx } from '@emotion/core';
import Styles, { PlaceholderWrapper } from './Logo.style';

const PlaceHolder = () => (
  <PlaceholderWrapper>
    <strong>LOGO</strong>PLACEHOLDER
  </PlaceholderWrapper>
);

interface Props {
  logoIcon?: JSX.Element;
}

const LogoWrapper = ({ logoIcon }: Props) => {
  const hasLogoIcon = Boolean(logoIcon);

  return <div css={Styles.wrapper({ hasLogoIcon })}>{logoIcon || <PlaceHolder />}</div>;
};

export default LogoWrapper;
