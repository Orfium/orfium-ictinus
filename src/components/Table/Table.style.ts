import { css } from '@emotion/core';
import { Theme } from '../../theme';

export const tableStyle = () => (theme: Theme) =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });
