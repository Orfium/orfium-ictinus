import { css } from '@emotion/react';

import type { TabOrientation } from '../../types';

export const tabsContainerStyles = (orientation: TabOrientation) => css`
  width: fit-content;
  display: flex;
  flex-direction: ${orientation === 'horizontal' ? 'column' : 'row'};
`;
