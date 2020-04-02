// import theme from 'src/theme/globals';
import { css, SerializedStyles } from '@emotion/core';
/* Declare mixins in order to further DRY our code. Any reusable and indepedent =  css code bundle
  should become a mixin. Include them using the "@include" command inside a =  css selector
 */
/* centers a block element */

export const grid: SerializedStyles = css`
  display: grid;

  grid-auto-columns: 1fr;
`;

export const well: SerializedStyles = css`
  border-radius: 6px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.08);
  background-color: white;
`;

export const centerAbsoluteVertical = css`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
`;

/* quick transition declaration */
export const transition = (s: number, type = 'all'): SerializedStyles => css`
  -webkit-transition: ${type} ${s}s ease-in-out;
  -moz-transition: ${type} ${s}s ease-in-out;
  -ms-transition: ${type} ${s}s ease-in-out;
  -o-transition: ${type} ${s}s ease-in-out;
  transition: ${type} ${s}s ease-in-out;
`;

/* adds a "..." after the line of the text exceeds the width of the component*/
export const lineEllipsis: SerializedStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const flex: SerializedStyles = css`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
`;

/* centers flex content */
export const flexCenter: SerializedStyles = css`
  ${flex};
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
`;

export const flexCenterVertical: SerializedStyles = css`
  ${flex};
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const plainTextButton: SerializedStyles = css`
  ${transition(0.1, 'color')}
  border: none;
  background: transparent;
  box-shadow: none;
  text-shadow: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  cursor: pointer;
`;
