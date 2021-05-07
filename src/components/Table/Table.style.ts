import { css, SerializedStyles } from '@emotion/react';

export const tableStyle = () => (): SerializedStyles =>
  css({ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' });
