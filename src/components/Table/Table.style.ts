import { Theme } from 'theme';
import { css } from '@emotion/core';

export const tableStyle = () => (theme: Theme) =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });
