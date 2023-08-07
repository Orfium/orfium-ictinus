import { css, SerializedStyles } from '@emotion/react';
import { transition } from 'theme/functions';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { SELECT_MIN_WIDTH } from '../TextInputBase/config';

export const selectWrapper = () => (): SerializedStyles =>
  css`
    position: relative;
    min-width: ${rem(SELECT_MIN_WIDTH)};
  `;

export const suffixContainer =
  (isOpen: boolean, isSearchable: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      padding: ${theme.globals.spacing.get('4')};
      display: flex;
      cursor: pointer;
      transform: rotate(${isOpen && !isSearchable ? '180' : '0'}deg);
      ${transition(0.2)}
    `;
