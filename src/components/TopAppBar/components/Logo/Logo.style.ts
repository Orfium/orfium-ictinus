import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../../../theme';
import { flexCenter } from '../../../../theme/functions';

const wrapper = (theme: Theme): SerializedStyles => css`
  ${flexCenter};
  background-color: transparent;
  margin: ${theme.globals.spacing.get('6')} ${theme.globals.spacing.get('8')}
    ${theme.globals.spacing.get('6')} ${theme.globals.spacing.get('6')};
  border-radius: ${theme.globals.spacing.get('3')};
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
