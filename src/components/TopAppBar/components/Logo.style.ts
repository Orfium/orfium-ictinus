import { Theme } from '../../../theme';
import { css, SerializedStyles } from '@emotion/core';
import { flexCenter } from '../../../theme/functions';

const wrapper = (theme: Theme): SerializedStyles => css`
  ${flexCenter};
  background-color: transparent;
  margin: ${theme.spacing.md} 72px ${theme.spacing.md} ${theme.spacing.md};
  border-radius: ${theme.spacing.xsm};
  max-width: 400px;
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
