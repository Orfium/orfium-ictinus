import useTheme from 'hooks/useTheme';
import React from 'react';

import Icon from '../Icon';
import type { AcceptedIconNames } from '../Icon';
import type { ButtonTokens } from 'components/Button/Button.tokens';
import { getButtonTokens } from 'components/Button/Button.tokens';
import type { PrimitiveButtonTypes } from 'components/Button/Button.types';
import type { ButtonBaseProps } from 'components/ButtonBase/ButtonBase';
import ButtonBase from 'components/ButtonBase/ButtonBase';

export type IconButtonShape = 'circle' | 'square';

export type IconButtonProps = Omit<
  ButtonBaseProps,
  'type' | 'isBlock' | 'isLoading' | 'isIconButton'
> & {
  /** This property defines the type of the IconButton */
  type?: PrimitiveButtonTypes;
  /** This property defines witch icon to use */
  iconName: AcceptedIconNames;
  /** This property defines the shape of the IconButton */
  shape?: IconButtonShape;
};

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { iconName, size = 'normal', type = 'primary', shape = 'circle', dataTestPrefixId } = props;
  const theme = useTheme();
  const tokens = getButtonTokens(theme);

  const iconColor = tokens(`${type}.textColor` as ButtonTokens);

  return (
    <ButtonBase
      {...props}
      ref={ref}
      isIconButton
      shape={shape}
      dataTestPrefixId={dataTestPrefixId ? `${dataTestPrefixId}-icon-` : 'icon-'}
    >
      <Icon size={tokens(`${size}.iconSize` as ButtonTokens)} name={iconName} color={iconColor} />
    </ButtonBase>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
