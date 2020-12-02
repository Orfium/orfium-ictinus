import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';
import {
  AcceptedColorComponentTypes,
  backgroundPickerBasedOnType,
} from '../../utils/themeFunctions';

const DEFAULT_NAVBAR_HEIGHT = 62;

interface StyleProps {
  bgColorType: AcceptedColorComponentTypes;
}

const topAppBarWrapper = ({ bgColorType }: StyleProps) => (theme: Theme): SerializedStyles => css`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${backgroundPickerBasedOnType(bgColorType)(theme)};
  color: ${theme.palette.white};
  height: ${DEFAULT_NAVBAR_HEIGHT}px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
`;

export default {
  topAppBarWrapper,
};
