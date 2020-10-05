import { css, SerializedStyles } from '@emotion/core';

export const tableStyle = () => (): SerializedStyles =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });
