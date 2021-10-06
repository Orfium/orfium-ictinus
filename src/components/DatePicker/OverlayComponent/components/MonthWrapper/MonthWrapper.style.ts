import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

export const monthWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: column;
`;

export const monthHeaderWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
`;

export const monthHeaderNavigationIconWrapperStyle = ({
  position = 'left',
}: {
  position: 'left' | 'right';
}) => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin: auto ${rem(5)};
  position: absolute;
  ${position === 'left' ? 'left: 0' : 'right: 0'};
  top: 0;
  bottom: 0;
  height: fit-content;
  z-index: 10;
`;

export const monthHeaderTitleWrapperStyle = ({ isRangePicker }: { isRangePicker: boolean }) => (
  theme: Theme
): SerializedStyles => css`
  margin: ${isRangePicker && `${theme.spacing.md} 0`};
  padding: 0;
  align-content: center;
  text-align: center;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const monthHeaderTitleStyle = ({ isRangePicker }: { isRangePicker: boolean }) => (
  theme: Theme
): SerializedStyles => css`
  margin: 0 ${theme.spacing.sm};
  padding: ${theme.spacing.sm};
  display: flex;
  justify-content: center;
  cursor: ${!isRangePicker && 'pointer'};
`;
