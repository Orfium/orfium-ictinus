import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'polished';

import { vars } from '@orfium/tokens';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';
import { FIELD_TOKENS } from '../DatePicker/DatePickInput/DatePickInput.style';

export const tagContent =
  ({ maxWidth }: { maxWidth?: number }) =>
  (): SerializedStyles => css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: ${maxWidth ? rem(maxWidth - 120) : 'unset'};
  `;

export const rightIconsContainer = (): SerializedStyles => css`
  position: absolute !important;
  bottom: 0;
  right: ${vars.spacing['4']};
  top: 0;
  display: flex;
  align-items: center;
`;

export const progressIndicatorStyles = (): SerializedStyles => css`
  padding-right: ${vars.spacing['5']};
`;

export const tagStyle = (): SerializedStyles => css`
  position: relative;
  margin-right: ${vars.spacing['3']};
`;

export const inputContainer = (): SerializedStyles => css`
  position: static;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: ${vars.spacing['3']};
  z-index: 2;
`;

/** TextField overrides */

export const textInputBaseOverrides = ({
  hasValue,
  hasLabel,
  isResponsive,
  isTextfield,
}: {
  hasValue: boolean;
  isLoading?: boolean;
  hasLabel?: boolean;
  isResponsive?: boolean;
  isTextfield?: boolean;
}) => {
  const labelStyles = {
    fontWeight: `${vars.weight.bold}`,
    transform: `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -82%) scale(0.8) !important`,
    bottom: 'auto',
  };

  const paddingTop = hasLabel ? 21 : 13;
  const paddingBottom = hasLabel ? 5 : 13;

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
      padding: `${rem(paddingTop)} ${rem(40)} ${rem(paddingBottom)} ${vars.spacing['5']}`,
      ...(isResponsive
        ? { width: 'max-content', minWidth: FIELD_TOKENS.minWidth.large.normal }
        : {}),
      ...(isTextfield ? { minWidth: FIELD_TOKENS.minWidth.large.normal, width: '100%' } : {}),
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
