import { css, SerializedStyles } from '@emotion/react';

import { rem } from '../../../theme/utils';

export const customContentStyle = (): SerializedStyles => css`
  padding: ${rem(16)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  height: 200px;
`;

export const tooltipContainerStyle = (): SerializedStyles => css`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${rem(250)};
`;

export const tooltipRowStyle = (): SerializedStyles => css`
  display: flex;
  width: ${rem(200)};
  justify-content: space-between;
  margin-bottom: ${rem(48)};
`;
