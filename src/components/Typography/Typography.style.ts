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
import textColorFigma from '../../theme/tokens/semantic/variables/textColor';
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

    const textColorCategory = isInverted ? 'inverted' : 'light';
    const textColor = `${textColorCategory}.${type}` as DotKeys<typeof textColorFigma>;

    return css`
      ${allStyles[variant](theme)};
      font-style: ${isItalic ? 'italic' : undefined};
      font-weight: ${isBold ? theme.globals.typography.fontWeight.get('bold') : undefined};
      text-decoration: ${isUnderline
        ? theme.globals.typography.textDecoration.get('link')
        : undefined};
      color: ${theme.tokens.textColor.get(textColor)};
    `;
  };
