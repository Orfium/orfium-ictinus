import useTheme from 'hooks/useTheme';
import omit from 'lodash/omit';
import React, { InputHTMLAttributes } from 'react';
import { DEFAULT_SIZE } from 'utils/size-utils';

import { TestProps } from '../../utils/types';
import Icon from '../Icon';
import Label from '../Label';
import { IconWrapper } from './components/commons';
import { AcceptedIconNames } from 'components/Icon/types';
import TextInputBase, { Props as TextInputWrapperProps } from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'readOnly'>>;

export type Props = {
  /** The id of the text field that will be used as for in label too */
  id?: string;
  /** Callback fired when the `input` is blurred. */
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Callback fired when the `input` is changed. */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /** Callback fired when the `input` is focused. */
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Callback fired when the `input` has a key down event. */
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /** Callback fired when the `input` value typed is changed */
  onInput?: React.EventHandler<any>;
  /** Boolean to make the input readonly. Default to false. */
  isReadOnly?: boolean;
  ref: React.ForwardedRef<HTMLInputElement>;
} & TextInputWrapperProps &
  InputProps &
  TestProps;

const TextField: React.FC<Props> = (props) => {
  const {
    id = undefined,
    rightIcon = null,
    leftIcon = null,
    label,
    placeholder = '',
    isRequired = false,
    isDisabled,
    isLocked = false,
    size = DEFAULT_SIZE,
    isDark = false,
    isLean,
    hintMsg: __hintMsg,
    styleType: __styleType,
    isReadOnly = false,
    status,
    ref,
    ...rest
  } = props;
  const theme = useTheme();

  const getIcon = (icon: AcceptedIconNames | JSX.Element | null) =>
    icon ? (
      typeof icon === 'string' ? (
        <Icon
          name={icon as AcceptedIconNames}
          size={24}
          color={theme.utils.getColor('lightGrey', 650)}
        />
      ) : (
        icon
      )
    ) : null;

  return (
    <React.Fragment>
      <TextInputBase {...props}>
        {leftIcon && <IconWrapper iconPosition={'left'}>{getIcon(leftIcon)}</IconWrapper>}
        <div css={{ width: '100% ' }}>
          <input
            readOnly={isReadOnly}
            css={inputStyle({ label, placeholder, size, isDark, isLean })}
            placeholder={!label && placeholder ? `${placeholder} ${isRequired ? '*' : ''}` : label}
            required={isRequired}
            id={id}
            disabled={isDisabled || isLocked}
            {...omit(rest, 'dataTestId')}
            ref={ref}
          />
          {label && (
            <Label
              htmlFor={id}
              label={label}
              isRequired={isRequired}
              isAnimated={Boolean(rest.value)}
              hasError={status === 'error'}
            />
          )}
        </div>
        {rightIcon && !isLocked && (
          <IconWrapper iconPosition={'right'}>{getIcon(rightIcon)}</IconWrapper>
        )}
        {isLocked && (
          <IconWrapper iconPosition={'right'}>
            <Icon
              name="lock"
              size={size === 'md' ? 20 : 16}
              color={theme.utils.getColor('lightGrey', 650)}
            />
          </IconWrapper>
        )}
      </TextInputBase>
    </React.Fragment>
  );
};

TextField.displayName = 'TextField';

export default React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <TextField {...props} ref={ref} />
));
