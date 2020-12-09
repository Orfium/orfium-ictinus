import { css, SerializedStyles } from '@emotion/core';
import { rem, transparentize } from 'polished';
import { Theme } from '../../theme';

// const customTooltipStyle = () => (theme: Theme): SerializedStyles => css`
//   font-size: ${theme.typography.fontSizes['14']};
//   padding: ${rem(8)};
//   color: ${theme.palette.white};
//   background: ${theme.palette.flat.darkGray[600]};
//   font-weight: ${theme.typography.weights.regular};
//   color: ${theme.palette.flat.darkGray[600]};
//   min-width: ${rem(247)};
//   white-space: nowrap;
// `;

export const tooltipStyle = () => (theme: Theme) => {
  return {
    fontSize: theme.typography.fontSizes['14'],
    padding: rem(8),
    color: theme.palette.white,
    background: theme.palette.flat.darkGray[600],
    opacity: '90%',
    borderRadius: '4px',
    minWidth: rem(247),
    whiteSpace: 'nowrap',
  };
};

export const tooltipHrStyle = () => (theme: Theme) => {
  return {
    margin: '17px 0px 13px 0px',
    height: '1px',
    borderWidth: 0,
    backgroundColor: theme.palette.white,
    opacity: '10%',
  };
};

export const tooltipUlStyle = () => (theme: Theme) => {
  return { padding: '0px', margin: '0px' };
};

export const tooltipLiStyle = (color) => (theme: Theme) => {
  return {
    listStyleType: 'none',
    color: color,
    // color: 'rgb(255, 255, 255)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '16px',
    padding: '2px 0px',
  };
};
