import useTheme from 'hooks/useTheme';
import { omit } from 'lodash';
import React, { InputHTMLAttributes } from 'react';
import isEqual from 'react-fast-compare';

import { IconWrapper } from './components/commons';
import { TestProps } from '../../utils/types';
import Icon from '../Icon';
import Label from '../Label';
import { AcceptedIconNames } from 'components/Icon/types';
import TextInputBase, { TextInputBaseProps } from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

export type InputProps = Partial<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'readOnly' | 'disabled'>
>;

export type TextFieldProps = {
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
} & TextInputBaseProps &
  InputProps &
  TestProps;

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    id = undefined,
    suffix = null,
    prefix = null,
    label,
    placeholder = '',
    isRequired = false,
    isDisabled,
    status,
    ...rest
  } = props;
  const theme = useTheme();

  const isLocked = status?.type === 'read-only';

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
        {prefix && <IconWrapper iconPosition={'left'}>{getIcon(prefix)}</IconWrapper>}
        <div css={{ width: '100% ' }}>
          <input
            readOnly={isLocked}
            css={inputStyle({ label, placeholder })}
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
              hasError={status?.type === 'error'}
            />
          )}
        </div>
        {suffix && !isLocked && <IconWrapper iconPosition={'right'}>{getIcon(suffix)}</IconWrapper>}
        {isLocked && (
          <IconWrapper iconPosition={'right'}>
            <Icon name="lock" size={20} color={theme.utils.getColor('lightGrey', 650)} />
          </IconWrapper>
        )}
      </TextInputBase>
    </React.Fragment>
  );
});

TextField.displayName = 'TextField';

export default React.memo(TextField, isEqual);
