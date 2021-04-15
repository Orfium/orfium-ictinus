import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { Theme } from '../../theme';
import { Props } from './CheckBox';

export const wrapperStyle = ({ disabled }: Props) => (): SerializedStyles => css`
  opacity: ${disabled ? 0.3 : 1};
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const checkboxWrapperStyle = () => (): SerializedStyles => css`
  border-radius: 100%;
  width: ${rem(48)};
  height: ${rem(48)};
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    border-radius: 100%;
    transition: all 0.2s;
    content: ' ';
    width: ${rem(48)};
    height: ${rem(48)};
    position: absolute;
  }
  &:hover:before {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const getBackgroundColor = ({ intermediate, checked, filled, theme }: Props & { theme: Theme }) => {
  // if checked and no intermediate
  if (checked && !intermediate && filled) {
    return `background: ${theme.utils.getColor('lightGray', 700)}`;
  }

  return filled
    ? `background: ${theme.utils.getColor('lightGray', 400)}`
    : `background: inherit; box-shadow: inset 0px 0px 0px ${rem('2px')} ${theme.utils.getColor(
        'darkGray',
        700
      )};`;
};

const getSymbolColor = ({ intermediate, filled, theme }: Props & { theme: Theme }) => {
  if (!filled) {
    return theme.utils.getColor('darkGray', 700);
  } else {
    return intermediate ? theme.utils.getColor('lightGray', 700) : 'white';
  }
};

export const checkboxStyle = ({ intermediate, checked, filled }: Props) => (
  theme: Theme
): SerializedStyles => {
  return css`
    border: 0;
    border-radius: ${rem(2)};
    width: ${rem(24)};
    height: ${rem(24)};

    position: absolute;
    opacity: 0; // hide it

    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
    }

    // Box.
    & + label:before {
      content: '';
      transition: all 0.2s;
      display: inline-block;
      vertical-align: text-top;
      width: ${rem(24)};
      height: ${rem(24)};
      ${getBackgroundColor({ intermediate, checked, filled, theme })};
      border-radius: ${rem(2)};
    }

    // Disabled state label.
    &:disabled + label {
      cursor: not-allowed;
    }
  `;
};

export const markerStyle = ({ intermediate, checked, filled }: Props) => (
  theme: Theme
): SerializedStyles => {
  const symbolColor = getSymbolColor({ intermediate, checked, filled, theme });

  return css`
    span {
      padding: 0;
    }

    svg {
      position: absolute;
      top: 0;
      display: ${checked ? 'block' : 'none'};
    }

    path {
      fill: ${symbolColor} !important;
    }
  `;
};

export const labelStyle = () => (theme: Theme): SerializedStyles => css`
  padding-left: ${rem(4)};
  font-size: ${theme.typography.fontSizes['15']};
  font-weight: ${theme.typography.weights.regular};
  color: ${theme.utils.getColor('darkGray', 600)};
  white-space: nowrap;
`;
