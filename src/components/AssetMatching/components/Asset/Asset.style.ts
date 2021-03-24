import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { Theme } from '../../../../theme';
import { flex } from '../../../../theme/functions';

const subHeading = (theme: Theme): SerializedStyles => css`
  font-size: ${rem(11)};
  font-weight: 500;
  color: ${theme.utils.getColor('lightGray', 600)};
  margin: 0;
`;

const subHeadingTop = (theme: Theme): SerializedStyles => css`
  ${subHeading(theme)};
  font-style: italic;
`;

const mainHeading = (theme: Theme): SerializedStyles => css`
  color: ${theme.utils.getColor('primary', 400, 'normal')};
  font-size: ${rem(16)};
  font-weight: bold;
  margin: ${theme.spacing.sm} 0;
`;

const article = (highlightBg: boolean = false) => (theme: Theme): SerializedStyles => css`
  ${flex};
  width: 100%;
  flex-direction: column;
  background: ${highlightBg ? theme.utils.getColor('lightGray', 100) : 'transparent'};
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.utils.getColor('lightGray', 200)};
  border-radius: ${theme.spacing.xsm};
  :first-of-type {
    margin-right: ${theme.spacing.md};
  }
`;

const headingWrapper = css`
  ${flex};
  flex-direction: column;
`;

const headingContainer = css`
  ${flex};
  justify-content: space-between;
  width: 100%;
`;

const linkedRecordings = css`
  ${flex};
  align-items: start;
`;

const linkedText = (theme: Theme): SerializedStyles => css`
  font-size: ${rem(12)};
  font-weight: 700;
  color: ${theme.utils.getColor('lightGray', 600)};
  margin: 0;
`;

const linkedCount = (theme: Theme): SerializedStyles => css`
  font-size: ${rem(16)};
  font-weight: 700;
  padding: ${theme.spacing.xsm};
  color: ${theme.utils.getColor('primary', 400, 'normal')};
  background: ${theme.utils.getColor('primary', 100, 'normal')};
  border-radius: ${theme.spacing.xsm};
  margin-left: ${theme.spacing.lg};
`;

export default {
  subHeading,
  mainHeading,
  article,
  headingWrapper,
  headingContainer,
  linkedRecordings,
  linkedText,
  linkedCount,
  subHeadingTop,
};
