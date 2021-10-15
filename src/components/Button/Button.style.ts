import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flex } from 'theme/functions';
import { rem } from 'theme/utils';
import { RequiredProperties } from 'utils/common';

import { Props } from './Button';

export const buttonSpanStyle = () => () => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
};

export const iconStyle = () => () => ({
  display: 'inline-flex',
});

export const childrenWrapperStyle = ({
  iconLeft,
  iconRight,
  hasChildren,
}: RequiredProperties<
  Omit<Props, 'block' | 'isIconButton' | 'buttonType' | 'dataTestId' | 'onClick'> & {
    hasChildren: boolean;
  }
>) => (theme: Theme) => {
  const rightIconExists = hasChildren && iconRight;
  const leftIconExists = hasChildren && iconLeft;

  return {
    marginLeft: leftIconExists ? theme.spacing.sm : 0,
    marginRight: rightIconExists ? theme.spacing.sm : 0,
  };
};

export const centralizedLoader: (clientWidth?: number) => SerializedStyles = clientWidth => css`
  width: ${clientWidth ? rem(clientWidth) : 'auto'};
  ${flex};
  justify-content: center;
`;
