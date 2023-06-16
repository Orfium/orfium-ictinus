import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';
import { Theme } from 'theme';
import { getTextFieldHeight } from 'utils/size-utils';

import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';

export const chipContent =
  ({ maxWidth }: { maxWidth?: number }) =>
  (): SerializedStyles =>
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: ${maxWidth ? rem(maxWidth - 120) : 'unset'};
    `;

export const rightIconsContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      position: absolute !important;
      bottom: 0;
      right: ${theme.globals.spacing.get('5')};
      top: 0;
      display: flex;
      align-items: center;
    `;

export const rightIconStyles =
  ({ isClickable }: { isClickable: boolean }) =>
  (): SerializedStyles =>
    css`
      cursor: ${isClickable ? 'pointer' : 'auto'};
    `;

export const chipStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      position: relative;
      margin-right: ${theme.globals.spacing.get('2')};
      & > div {
        height: ${rem(20)};
        border-radius: ${rem(4)};
      }
    `;

export const inputContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      position: static;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      row-gap: ${theme.globals.spacing.get('2')};
      z-index: 2;
    `;

/** TextField overrides */

export const textInputBaseOverrides =
  ({ hasValue, isLoading }: { hasValue: boolean; isLoading?: boolean }) =>
  (theme: Theme) => {
    const labelStyles = {
      fontWeight: `${theme.globals.typography.fontWeight.get('bold')} !important` as any,
      transform: `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -82%) scale(0.8) !important`,
      bottom: 'auto',
    };

    return {
      wrapper: {
        height: 'unset',
        minHeight: `${getTextFieldHeight('md')} !important`,
        ...(hasValue
          ? { label: labelStyles }
          : {
              'input:focus': {
                label: labelStyles,
              },
              label: {
                transform: `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -8px)`,
              },
            }),
      },
      textField: {
        // For the paddings we use specifically custom numbers that don't match the
        // ictinus spacing (the are calculated by combining internal absolute positioned component widths)
        // so we can override the existing TextFieldInputBase paddings to
        // perfectly position and align the content inside.
        padding: isLoading
          ? `${rem(21)} ${rem(80)} ${rem(5)} ${theme.globals.spacing.get('5')}`
          : `${rem(21)} ${rem(40)} ${rem(5)} ${theme.globals.spacing.get('5')}`,
      },
    };
  };

export const inputOverrides = () => {
  return {
    input: {
      top: 'unset',
      flex: '1 1 0%',
      minWidth: '20%',
      '&:focus, &:not(:placeholder-shown)': {
        '& + label': {
          transform: `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -82%) scale(0.8)`,
        },
      },
    },
  };
};
