import { css, SerializedStyles } from '@emotion/core';
import { Theme } from 'theme';

export const listItemStyle = ({
  size,
  selected,
  disabled,
}: {
  size: 'small' | 'normal';
  selected: boolean;
  disabled: boolean;
}) => (theme: Theme): SerializedStyles => css`
  height: ${size === 'normal' ? '56px' : '46px'};
  font-size: ${size === 'normal' ? '16px' : '14px'};
  background-color: ${theme.palette.white};
  display: flex;
  align-items: center;
  padding: 0px 16px;

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
