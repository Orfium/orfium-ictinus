import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { FontSpacing } from 'theme/tokens/semantic/typography';

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
  label04,
  body01,
  body02,
  body03,
  body04,
} from './Typography.config.styles';
import colorsFigma from '../../theme/tokens/semantic/variables/colors';
import { DotKeys } from '../../theme/tokens/utils';

export const typographyWrapper =
  ({
    variant,
    isInverted,
    fontSpacing = 'normal',
    isItalic,
    isBold,
    isUnderline,
    type,
  }: {
    variant: TypographyVariant;
    fontSpacing: FontSpacing;
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
      label04,
      body01,
      body02,
      body03,
      body04,
    };

    const textColorCategory = isInverted ? 'inverted' : 'light';
    const textColor = `textColor.${textColorCategory}.${type}` as DotKeys<typeof colorsFigma>;

    return css`
      ${allStyles[variant](theme, fontSpacing)};
      font-style: ${isItalic ? 'italic' : undefined};
      font-weight: ${isBold ? theme.globals.typography.fontWeight.get('bold') : undefined};
      text-decoration: ${isUnderline
        ? theme.globals.typography.textDecoration.get('link')
        : undefined};
      color: ${theme.tokens.colors.get(textColor)};
    `;
  };
