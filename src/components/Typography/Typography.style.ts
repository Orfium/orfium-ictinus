import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

import { TypographyType } from './Typography';

export const typographyWrapper =
  ({ type }: { type: TypographyType }) =>
  (theme: Theme): SerializedStyles => {
    // headlines
    const headline01 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('10')};
      font-size: ${theme.typography.fontSizes.get('9')};
      font-weight: ${theme.typography.weights.get('bold')};
      letter-spacing: ${theme.typography.letterSpacings.get('0')};
    `;
    const headline02 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('9')};
      font-size: ${theme.typography.fontSizes.get('8')};
      font-weight: ${theme.typography.weights.get('bold')};
      letter-spacing: ${theme.typography.letterSpacings.get('0')};
    `;
    const headline03 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('8')};
      font-size: ${theme.typography.fontSizes.get('7')};
      font-weight: ${theme.typography.weights.get('bold')};
      letter-spacing: ${theme.typography.letterSpacings.get('0')};
    `;
    const headline04 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('7')};
      font-size: ${theme.typography.fontSizes.get('6')};
      font-weight: ${theme.typography.weights.get('bold')};
      letter-spacing: ${theme.typography.letterSpacings.get('0')};
    `;
    const headline05 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('6')};
      font-size: ${theme.typography.fontSizes.get('5')};
      font-weight: ${theme.typography.weights.get('bold')};
      letter-spacing: ${theme.typography.letterSpacings.get('0')};
    `;
    // titles
    const title01 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('5')};
      font-size: ${theme.typography.fontSizes.get('4')};
      font-weight: ${theme.typography.weights.get('bold')};
      letter-spacing: ${theme.typography.letterSpacings.get('1')};
    `;
    const title02 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('4')};
      font-size: ${theme.typography.fontSizes.get('3')};
      font-weight: ${theme.typography.weights.get('bold')};
      letter-spacing: ${theme.typography.letterSpacings.get('1')};
    `;
    const title03 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('3')};
      font-size: ${theme.typography.fontSizes.get('1')};
      font-weight: ${theme.typography.weights.get('bold')};
      letter-spacing: ${theme.typography.letterSpacings.get('2')};
    `;
    // labels
    const label01 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('5')};
      font-size: ${theme.typography.fontSizes.get('4')};
      font-weight: ${theme.typography.weights.get('medium')};
      letter-spacing: ${theme.typography.letterSpacings.get('1')};
    `;
    const label02 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('4')};
      font-size: ${theme.typography.fontSizes.get('3')};
      font-weight: ${theme.typography.weights.get('medium')};
      letter-spacing: ${theme.typography.letterSpacings.get('2')};
    `;
    const label03 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('3')};
      font-size: ${theme.typography.fontSizes.get('1')};
      font-weight: ${theme.typography.weights.get('medium')};
      letter-spacing: ${theme.typography.letterSpacings.get('2')};
    `;
    // body
    const body01 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('5')};
      font-size: ${theme.typography.fontSizes.get('4')};
      font-weight: ${theme.typography.weights.get('regular')};
      letter-spacing: ${theme.typography.letterSpacings.get('2')};
    `;
    const body02 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('4')};
      font-size: ${theme.typography.fontSizes.get('3')};
      font-weight: ${theme.typography.weights.get('regular')};
      letter-spacing: ${theme.typography.letterSpacings.get('2')};
    `;
    const body03 = css`
      font-family: ${theme.typography.fontFamilies.get('roboto')};
      line-height: ${theme.typography.lineHeights.get('3')};
      font-size: ${theme.typography.fontSizes.get('1')};
      font-weight: ${theme.typography.weights.get('regular')};
      letter-spacing: ${theme.typography.letterSpacings.get('2')};
    `;

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

    return allStyles[type];
  };