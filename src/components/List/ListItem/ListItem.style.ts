import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { Theme } from 'theme';

import { ListRowSize } from '../List';

export const listItemStyle = ({
  size,
  selected,
  disabled,
}: {
  size: ListRowSize;
  selected: boolean;
  disabled: boolean;
}) => (theme: Theme): SerializedStyles => css`
  height: ${size === 'normal' ? rem(56) : rem(46)};
  font-size: ${theme.typography.fontSizes[size === 'normal' ? '16' : '14']};
  background-color: ${theme.palette.white};
  display: flex;
  align-items: center;
  padding: 0px ${theme.spacing.md};

  ${!(selected || disabled) &&
    `
        &:hover {
           filter: brightness(97%);
           transition: all 0.2s ease;
         }
    `}

  ${selected &&
    `
        filter: brightness(93%);
    `}

    ${disabled &&
      `
        filter: brightness(93%);
        opacity: 0.5;
        cursor: not-allowed;
    `}
`;

export const contentStyle = (): SerializedStyles => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
