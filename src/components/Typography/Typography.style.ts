import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

import { TypographyVariant, TextColorTypes } from './Typography';
import {
  headline01,
  headline02,
  headline03,
  headline04,
  headline05,
  title01,
  title02,
  title03,
  label01,
  label02,
  label03,
  body01,
  body02,
  body03,
} from './Typography.config.styles';
import colorsFigma from '../../theme/tokens/semantic/variables/colors';
import { DotKeys } from '../../theme/tokens/utils';

export const typographyWrapper =
  ({
    variant,
    isInverted,
    isItalic,
    isBold,
    isUnderline,
    type,
  }: {
    variant: TypographyVariant;
    isInverted?: boolean;
    isItalic?: boolean;
    isBold?: boolean;
    isUnderline?: boolean;
    type: TextColorTypes;
  }) =>
  (theme: Theme): SerializedStyles => {
    const allStyles = {
      headline01,
      headline02,
      headline03,
      headline04,
      headline05,
      title01,
      title02,
      title03,
      label01,
      label02,
      label03,
      body01,
      body02,
      body03,
    };

    const textColorCategory = isInverted ? 'inverted' : 'primary';
    const textColor = `textColor.${textColorCategory}.${type}` as DotKeys<typeof colorsFigma>;

    return css`
      ${allStyles[variant](theme)};
      font-style: ${isItalic ? 'italic' : undefined};
      font-weight: ${isBold ? theme.globals.typography.fontWeight.get('bold') : undefined};
      text-decoration: ${isUnderline
        ? theme.globals.typography.textDecoration.get('link')
        : undefined};
      color: ${theme.tokens.colors.get(textColor)};
    `;
  };
