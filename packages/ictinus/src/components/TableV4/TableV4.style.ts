import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

import { getBorderColor } from './utils';

export const tableStyle = () => (): SerializedStyles =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });

export const tableCTAStyle = (isFixed: boolean): SerializedStyles =>
  css({
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
    position: isFixed ? 'sticky' : undefined,
    top: isFixed ? 0 : undefined,
    background: isFixed ? vars.color.background.default : undefined,
    zIndex: isFixed ? 3 : undefined,
  });

export const tableRowHeadersStyle = (
  hasExpandableRows: boolean,
  hasOnCheck: boolean,
  hasFixedHeader: boolean
): SerializedStyles =>
  css({
    paddingTop: vars.spacing['6'],
    paddingBottom: vars.spacing['6'],
    borderBottomWidth: rem(hasExpandableRows || hasFixedHeader ? 0 : 1),
    borderBottomStyle: 'solid',
    borderBottomColor: getBorderColor(),

    'th:first-of-type': {
      paddingLeft: hasOnCheck ? undefined : vars.spacing['6'],
    },

    'th:last-child': {
      paddingRight: hasExpandableRows ? undefined : vars.spacing['6'],
    },
  });
