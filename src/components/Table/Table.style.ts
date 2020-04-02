import { Theme } from 'theme';
import { css, SerializedStyles } from '@emotion/core';

export const tableStyle = () => (theme: Theme): SerializedStyles =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });
