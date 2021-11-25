import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

export const wrapperStyle = ({
  width,
  isSearchable,
}: {
  width: number | undefined;
  isSearchable?: boolean;
}) => (theme: Theme): SerializedStyles => css`
  border: ${isSearchable ? 'initial' : `1px solid ${theme.utils.getColor('lightGrey', 100)}`};
  border-radius: ${isSearchable ? 'initial' : theme.spacing.xsm};
  width: ${`${width}px` || '100%'};
`;
