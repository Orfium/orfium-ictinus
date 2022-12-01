import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

export const iconWrapperStyle = ({
  iconPosition,
  isClickable,
}: {
  iconPosition?: 'left' | 'right';
  isClickable?: boolean;
}) => (theme: Theme): SerializedStyles => css`
  line-height: 0.8;
  height: ${rem(16)};
  display: flex;
  align-items: center;
  cursor: ${isClickable ? 'pointer' : 'unset'};
  margin-left: ${iconPosition === 'right' ? theme.spacing.get('4') : 'inherit'};
  margin-right: ${iconPosition === 'left' ? theme.spacing.get('4') : 0};
`;
