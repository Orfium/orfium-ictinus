import { css, SerializedStyles } from '@emotion/core';
import { Theme } from 'theme';
import { flex, transition } from 'theme/functions';

export const boldFont = (size: number, theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes[size]};
  font-weight: ${theme.typography.weights.bold};
`;

export const normalFont = (size: number, theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes[size]};
  font-weight: 500;
`;

const subHeading = (theme: Theme): SerializedStyles => css`
  ${normalFont(11, theme)};
  color: ${theme.utils.getColor('lightGray', 600)};
  margin: 0;
`;

const subHeadingTop = (theme: Theme): SerializedStyles => css`
  ${subHeading(theme)};
  font-style: italic;
`;

const mainHeading = (theme: Theme): SerializedStyles => css`
  color: ${theme.utils.getColor('primary', 400, 'normal')};
  ${boldFont(16, theme)};
  margin: ${theme.spacing.sm} 0;
  cursor: default;
`;

const article = (isHighlighted: boolean = false) => (theme: Theme): SerializedStyles => css`
  ${flex};
  width: 100%;
  flex-direction: column;
  background: ${isHighlighted ? theme.utils.getColor('lightGray', 100) : 'transparent'};
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
  ${boldFont(16, theme)};
  color: ${theme.utils.getColor('lightGray', 600)};
  margin: 0;
`;

const linkedCount = (theme: Theme): SerializedStyles => css`
  ${boldFont(16, theme)};
  padding: ${theme.spacing.xsm};
  color: ${theme.utils.getColor('primary', 400, 'normal')};
  background: ${theme.utils.getColor('primary', 100, 'normal')};
  border-radius: ${theme.spacing.xsm};
  margin-left: ${theme.spacing.lg};
`;

const externalLink = (theme: Theme): SerializedStyles => css`
  display: none;
  margin: auto ${theme.spacing.sm};
  text-decoration: none;
  cursor: pointer;

  :hover {
    > span {
      > svg {
        > path {
          ${transition(0.2, 'fill')};
          fill: ${theme.palette.black};
        }
      }
    }
  }
`;

const title = (theme: Theme): SerializedStyles => css`
  ${flex};

  :hover {
    ${transition(0.2, 'text-decoration')};
    text-decoration: underline;
    color: ${theme.utils.getColor('primary', 400, 'normal')};
    a {
      display: block;
    }
  }
`;

const tooltip = (theme: Theme): SerializedStyles => css`
  font-size: ${theme.typography.fontSizes['12']};
  background-color: ${theme.utils.getColor('darkGray', 500)};
`;

const iconHeadingWrapper = css`
  ${flex};
  justify-content: center;
`;

export default {
  iconHeadingWrapper,
  title,
  tooltip,
  externalLink,
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
