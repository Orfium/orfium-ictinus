import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';
import type { TextFieldProps } from 'components/TextField/TextField';
import type { Theme } from 'theme';
import { generateStylesFromTokens } from '~/components/Typography';
import { flexCenter } from '~/theme/functions';
import type { SelectMenuProps } from './SelectMenu';

const LIST_ITEM_TOKENS = {
  height: vars.sizing['13'],
  heightCompact: vars.sizing['10'],
};

export const optionStyle = (): SerializedStyles => {
  return css`
    & > div,
    ul {
      border: none;
      border-radius: 0;
    }

    cursor: default;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;

    &:hover {
      background-color: ${vars.color.background.default};
    }
  `;
};

export const menuStyle = ({
  isVirtualized,
  sx,
}: SelectMenuProps & Omit<TextFieldProps, 'ref' | 'label'>): SerializedStyles => css`
  z-index: 500;
  position: absolute;
  overflow-y: ${isVirtualized ? 'hidden' : 'auto'};
  border: ${rem(1)} solid ${vars.color['border-color'].decorative.default};
  border-radius: ${vars.spacing['3']};
  box-shadow: ${vars['box-shadow']['2']};
  min-width: 100%;
  max-width: ${rem(620)};
  max-height: inherit;
  ${sx};
`;

export const innerMenuStyle = ({ height }: { height: number }) => css`
  max-height: ${rem(height)};
`;

export const emptyAndLoadingStyle = () => (theme: Theme) => {
  return css`
    color: ${vars.color.text.default.secondary};
    height: ${LIST_ITEM_TOKENS.height};
    padding: 0 ${vars.spacing['5']};
    background: ${vars.color.background.default};

    ${flexCenter};

    ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};
  `;
};
