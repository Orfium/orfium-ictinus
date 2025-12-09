import type { CSSObject, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { ContentAlign, TableProps } from 'components/Table';
import { ACTIONS_CELL_WIDTH } from '../../constants';

import { rem, vars } from '@orfium/tokens';

const TD_HEIGHT = {
  sm: vars.sizing['11'],
  md: vars.sizing['13'],
  lg: vars.sizing['15'],
};

export const simpleTdContainer = (): SerializedStyles => {
  return css`
    border-bottom: ${vars['border-width']['1']} solid
      ${vars.color['border-color'].decorative.default};
  `;
};

export const tdContainer = ({
  rowSize,
  width,
  isCheckbox,
  isExpandedButton,
  sx,
}: Pick<TableProps<any>, 'rowSize'> & {
  isCheckbox?: boolean;
  isExpandedButton?: boolean;
  width?: number;
  isLastCell?: boolean;
  sx?: CSSObject;
}): SerializedStyles => {
  const getWidth = () => {
    if (isCheckbox || isExpandedButton) {
      return rem(ACTIONS_CELL_WIDTH);
    }

    if (width) {
      return `${width}%`;
    }

    return '100%';
  };

  return css`
    width: ${getWidth()};
    height: ${TD_HEIGHT[rowSize]};
    padding: ${vars.spacing['4']} ${vars.spacing['6']};
    border-bottom: ${vars['border-width']['1']} solid
      ${vars.color['border-color'].decorative.default};
    box-sizing: border-box;
    align-content: center;

    ${sx};
  `;
};

export const tdContent = ({ contentAlign }: { contentAlign: ContentAlign }): SerializedStyles => {
  return css`
    text-align: ${contentAlign};
  `;
};
