import { css, SerializedStyles } from '@emotion/core';
import { Theme } from 'theme';
import rem from 'polished/lib/helpers/rem';

export const borderedRowStyle = (bordered: boolean) => (theme: Theme): SerializedStyles =>
  css({
    borderBottom: bordered ? `${rem(1)} solid ${theme.utils.getColor('lightGray', 200)}` : 'none',
  });

export const expandableRowStyle = (isFirstRow: boolean) => (theme: Theme): SerializedStyles =>
  css({
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    borderTop:
      //Adds border to the first row only.
      isFirstRow ? `${rem(1)} solid ${theme.utils.getColor('lightGray', 200)}` : 'none',
    borderBottom: `${rem(1)} solid ${theme.utils.getColor('lightGray', 200)}`,
  });
