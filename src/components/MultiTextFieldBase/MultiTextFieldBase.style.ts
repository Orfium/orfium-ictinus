import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'polished';
import type { Theme } from 'theme';

import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';
import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';

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
      right: ${theme.globals.spacing.get('3')};
      top: 0;
      display: flex;
      align-items: center;
    `;

export const rightIconStyles =
  ({ isClickable }: { isClickable: boolean }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      /** @TODO: revisit these styles when Interactive Icon is implemented */
      width: ${rem(36)};
      height: ${rem(36)};
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: ${isClickable ? 'pointer' : 'auto'};

      /** @TODO: revisit these styles when Interactive Icon is implemented */
      &:focus-visible,
      &:hover {
        background: ${theme.tokens.state.get('backgroundColor.hover')};
        border-radius: ${theme.globals.borderRadius.get('7')};
      }
    `;
  };

export const chipStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      position: relative;
      margin-right: ${theme.globals.spacing.get('3')};
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
      row-gap: ${theme.globals.spacing.get('3')};
      z-index: 2;
    `;

/** TextField overrides */

export const textInputBaseOverrides =
  ({
    hasValue,
    isLoading,
    hasLabel,
    isResponsive,
    isTextfield,
  }: {
    hasValue: boolean;
    isLoading?: boolean;
    hasLabel?: boolean;
    isResponsive?: boolean;
    isTextfield?: boolean;
  }) =>
  (theme: Theme) => {
    const labelStyles = {
      fontWeight: `${theme.globals.typography.fontWeight.get('bold')}`,
      transform: `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -82%) scale(0.8) !important`,
      bottom: 'auto',
    };

    const paddingTop = hasLabel ? 21 : 13;
    const paddingBottom = hasLabel ? 5 : 13;

    const tokens = getTextInputBaseTokens(theme);

    return {
      wrapper: {
        height: 'unset',
        // TODO - fix this
        minHeight: `${rem(52)} !important`,
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
          ? `${rem(paddingTop)} ${rem(80)} ${rem(paddingBottom)} ${tokens('paddingContentLeft')}`
          : `${rem(paddingTop)} ${rem(40)} ${rem(paddingBottom)} ${tokens('paddingContentLeft')}`,
        ...(isResponsive
          ? { width: 'max-content', minWidth: rem(tokens('minWidth.large.normal')) }
          : {}),
        ...(isTextfield ? { minWidth: rem(tokens('minWidth.large.normal')), width: '100%' } : {}),
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
