import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

import type { TextFieldProps } from '.';

export const iconWrapperStyle =
  ({ iconPosition, isClickable }: { iconPosition?: 'left' | 'right'; isClickable?: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css`
      line-height: 0.8;
      height: ${rem(16)};
      display: flex;
      align-items: center;
      cursor: ${isClickable ? 'pointer' : 'unset'};
      margin-left: ${iconPosition === 'right' ? theme.globals.spacing.get('4') : 'inherit'};
      margin-right: ${iconPosition === 'left' ? theme.globals.spacing.get('4') : 0};
    `;

export const suffixContainerStyle =
  ({ size, isClickable }: Pick<TextFieldProps, 'size'> & { isClickable?: boolean }) =>
  (): SerializedStyles => {
    return css`
      min-width: ${rem(size === 'compact' ? 28 : 44)};
      overflow: visible;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: ${isClickable ? 'pointer' : 'unset'};
    `;
  };
