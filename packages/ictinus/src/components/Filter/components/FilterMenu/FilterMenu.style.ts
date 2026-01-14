import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';
import { FILTER_WIDTH } from '../../constants';

export const menuStyle = ({ isMulti }) => {
  return css`
    max-height: inherit;
    max-width: ${rem(FILTER_WIDTH[isMulti ? 'multi' : 'single'].maxWidth)};
    min-width: ${rem(FILTER_WIDTH[isMulti ? 'multi' : 'single'].minWidth)};
    overflow: auto;
    border: ${rem(1)} solid ${vars.color['border-color'].decorative.default};
    border-radius: ${vars.spacing['3']};
    box-shadow: ${vars['box-shadow']['2']};
  `;
};
