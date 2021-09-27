import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

export const tickStyle = (fill: string) => (theme: Theme): SerializedStyles => css`
  width: inherit;
  height: inherit;
  color: ${fill};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const tooltipStyle = () => (theme: Theme): SerializedStyles => css`
  display: block;
  position: fixed;
  top: -33%;
  left: 106%;
  color: ${theme.palette.white};
  background-color: ${theme.utils.getColor('darkGrey', 750)};
  opacity: 90%;
  border-radius: ${theme.spacing.xsm};
  padding: ${theme.spacing.sm};
`;

export const tooltipArrowStyle = () => (theme: Theme): SerializedStyles => css`
  content: '';
  position: absolute;
  border-style: solid;
  margin-top: -5px;
  border-width: 5px;
  border-color: transparent ${theme.utils.getColor('darkGrey', 750)} transparent transparent;
  top: 50%;
  left: 100%;
  opacity: 90%;
`;
