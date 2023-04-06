import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

import { TypographyType } from './Typography';

export const typographyWrapper =
  ({ type }: { type: TypographyType }) =>
  (theme: Theme): SerializedStyles => {
    // headlines
    const headline01 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('10')};
      font-size: ${theme.globals.typography.fontSize.get('9')};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('0')};
      margin-block-start: 1rem;
      margin-block-end: 1rem;
    `;
    const headline02 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('9')};
      font-size: ${theme.globals.typography.fontSize.get('8')};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('0')};
      margin-block-start: 1rem;
      margin-block-end: 1rem;
    `;
    const headline03 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('8')};
      font-size: ${theme.globals.typography.fontSize.get('7')};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('0')};
      margin-block-start: 1rem;
      margin-block-end: 1rem;
    `;
    const headline04 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('7')};
      font-size: ${theme.globals.typography.fontSize.get('6')};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('0')};
      margin-block-start: 1rem;
      margin-block-end: 1rem;
    `;
    const headline05 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('6')};
      font-size: ${theme.globals.typography.fontSize.get('5')};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('0')};
      margin-block-start: 1rem;
      margin-block-end: 1rem;
    `;
    // titles
    const title01 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('5')};
      font-size: ${theme.globals.typography.fontSize.get('4')};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('1')};
    `;
    const title02 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('4')};
      font-size: ${theme.globals.typography.fontSize.get('3')};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('1')};
    `;
    const title03 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('3')};
      font-size: ${theme.globals.typography.fontSize.get('1')};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('2')};
    `;
    // labels
    const label01 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('5')};
      font-size: ${theme.globals.typography.fontSize.get('4')};
      font-weight: ${theme.globals.typography.fontWeight.get('medium')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('1')};
    `;
    const label02 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('4')};
      font-size: ${theme.globals.typography.fontSize.get('3')};
      font-weight: ${theme.globals.typography.fontWeight.get('medium')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('2')};
    `;
    const label03 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('3')};
      font-size: ${theme.globals.typography.fontSize.get('1')};
      font-weight: ${theme.globals.typography.fontWeight.get('medium')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('2')};
    `;
    // body
    const body01 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('5')};
      font-size: ${theme.globals.typography.fontSize.get('4')};
      font-weight: ${theme.globals.typography.fontWeight.get('regular')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('2')};
    `;
    const body02 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('4')};
      font-size: ${theme.globals.typography.fontSize.get('3')};
      font-weight: ${theme.globals.typography.fontWeight.get('regular')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('2')};
    `;
    const body03 = css`
      font-family: ${theme.globals.typography.fontFamily.get('roboto')};
      line-height: ${theme.globals.typography.lineHeight.get('3')};
      font-size: ${theme.globals.typography.fontSize.get('1')};
      font-weight: ${theme.globals.typography.fontWeight.get('regular')};
      letter-spacing: ${theme.globals.typography.letterSpacing.get('2')};
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
