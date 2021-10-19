import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

export const wrapperStyle = ({ width }: { width: number | undefined }) => (
  theme: Theme
): SerializedStyles => css`
  border: 1px solid ${theme.utils.getColor('lightGrey', 100)};
  border-radius: ${theme.spacing.xsm};
  width: ${`${width}px` || '100%'};
`;
