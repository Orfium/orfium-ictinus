import { css } from '@emotion/react';

import type { TabOrientation } from '../../types';

export const tabsContainerStyles = (orientation: TabOrientation) => css`
  display: flex;
  flex-direction: ${orientation === 'horizontal' ? 'column' : 'row'};

  ${orientation === 'horizontal' && `width: fit-content;`}
  ${orientation === 'vertical' && `height: fit-content;`}
`;
