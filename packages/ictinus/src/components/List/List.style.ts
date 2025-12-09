import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

export const wrapperStyle = ({
  width,
  isSearchable,
}: {
  width: number | undefined;
  isSearchable?: boolean;
}): SerializedStyles => {
  return css`
    border: ${isSearchable
      ? 'initial'
      : `${vars['border-width']['1']} solid ${vars.color['border-color'].decorative.default}`};
    border-radius: ${isSearchable ? 'initial' : vars['border-radius']['2']};
    width: ${width !== undefined ? `${width}px` : '100%'};
    box-shadow: ${vars['box-shadow']['2']};
  `;
};

export const listStyle = ({
  width,
  height,
  maxHeight,
  isSearchable,
}: {
  width?: number;
  height?: number;
  maxHeight?: number;
  isSearchable?: boolean;
}): SerializedStyles => {
  return css`
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: ${isSearchable ? 'initial' : vars['border-radius']['2']};
    width: ${width ? rem(width) : '100%'};
    height: ${height ? rem(height) : 'auto'};
    max-height: ${maxHeight ? rem(maxHeight) : 'auto'};
    overflow: auto;
    overflow-x: hidden;
    background: ${vars.color.background.default};
  `;
};

export const groupedUlStyle = (): SerializedStyles => css`
  padding: 0;
  list-style: none;
`;
