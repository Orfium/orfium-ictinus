import { Theme } from 'theme';
import { css } from '@emotion/core';

// import { RequiredProperties } from '../../utils/common';
// import { Props } from 'components/Breadcrumb/Breadcrumb';

export const separatorStyles = () => (theme: Theme) => css`
  margin: auto ${theme.spacing.md};
  color: ${theme.palette.gray100};
`;
