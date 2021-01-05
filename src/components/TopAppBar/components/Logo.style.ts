import { Theme } from '../../../theme';
import { css, SerializedStyles } from '@emotion/core';
import { flexCenter } from '../../../theme/functions';

interface WrapperProps {
  hasLogoIcon: boolean;
}

const wrapper = ({ hasLogoIcon }: WrapperProps) => (theme: Theme): SerializedStyles => css`
  ${flexCenter};
  background-color: ${hasLogoIcon ? 'transparent' : theme.palette.flat.lightGray[700]};
  margin: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.md} 0px;
  border-radius: ${theme.spacing.xsm};
  width: 200px;
  max-width: 400px;
  height: 52px;
`;

export const placeholderWrapper = css`
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;

export default {
  wrapper,
  placeholderWrapper,
};
