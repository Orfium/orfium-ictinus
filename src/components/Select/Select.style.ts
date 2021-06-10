import { Theme } from '../../theme';
import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { formFieldStyles } from '../../theme/palette';

export const selectWrapper = ({
  styleType,
  open,
  status,
  isSearchable,
}: {
  open: boolean;
  styleType?: formFieldStyles;
  status?: 'success' | 'normal' | 'hint' | 'error';
  isSearchable: boolean;
}) => (theme: Theme): SerializedStyles => css`
  position: relative;
  min-width: ${rem(150)};
  max-width: ${rem(620)};
  & > div:nth-of-type(1) > div {
    ${open && status !== 'error' && `border: 2px solid ${theme.utils.getColor('lightGray', 400)};`}
    ${open && status !== 'error' && styleType === 'outlined' && `box-shadow: none;`}
  }

  * {
    cursor: ${!isSearchable ? 'pointer' : 'auto'};
  }
`;
