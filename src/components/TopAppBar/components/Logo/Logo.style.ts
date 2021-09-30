import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../../../theme';
import { flexCenter } from '../../../../theme/functions';

const wrapper = (theme: Theme): SerializedStyles => css`
  ${flexCenter};
  background-color: transparent;
  margin: ${theme.spacing.md} ${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.md};
  border-radius: ${theme.spacing.xsm};
  max-width: ${rem(400)};
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
