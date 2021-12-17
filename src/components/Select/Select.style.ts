import { css, SerializedStyles } from '@emotion/react';
import { transition } from 'theme/functions';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
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
    ${open && status !== 'error' && `border: 2px solid ${theme.utils.getColor('lightGrey', 200)};`}
    ${open && status !== 'error' && styleType === 'outlined' && `box-shadow: none;`}
  }

  * {
    cursor: ${!isSearchable && 'pointer'};
  }
`;

export const rightIconContainer = (
  open: boolean,
  isSearchable: boolean
) => (): SerializedStyles => css`
  display: flex;
  gap: ${rem(25)};
  cursor: pointer;
  transform: rotate(${open && !isSearchable ? '180' : '0'}deg);
  ${transition(0.2)}
`;
