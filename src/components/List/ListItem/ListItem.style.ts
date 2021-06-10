import { css, SerializedStyles } from '@emotion/core';
import { Theme } from 'theme';

export const listItemStyle = ({
  size,
  selected,
  disabled,
  hasCheckbox,
}: {
  size: 'small' | 'normal';
  selected: boolean;
  disabled: boolean;
  hasCheckbox: boolean;
}) => (theme: Theme): SerializedStyles => css`
  height: ${size === 'normal' ? '56px' : '46px'};
  font-size: ${size === 'normal' ? '16px' : '14px'};
  background-color: ${theme.palette.white};
  display: flex;
  align-items: center;
  padding: ${hasCheckbox ? '0px 16px 0px 4px' : '0px 16px'};

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

export const iconStyle = ({ position }: { position: 'left' | 'right' }): SerializedStyles => css`
  ${position === 'left'
    ? `
        margin-right: 10px;
    `
    : `
        margin-left: auto;
        padding-left: 10px;
    `}
`;

export const contentStyle = (): SerializedStyles => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
