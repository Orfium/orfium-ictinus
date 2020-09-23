import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';

export const tableStyle = () => (theme: Theme): SerializedStyles =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });
