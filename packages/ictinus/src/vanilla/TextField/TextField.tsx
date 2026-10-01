import { forwardRef, type ReactNode } from 'react';
import type {
  FieldErrorProps,
  InputProps,
  LabelProps,
  TextFieldProps as PrimitiveTextFieldProps,
  TextProps,
} from 'react-aria-components';
import {
  FieldError as FieldErrorPrimitive,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  TextField as PrimitiveTextField,
  Text as TextPrimitive,
} from 'react-aria-components';

import type { Sprinkles } from '../../sprinkles';
import { cn } from '../../utils/cn';
import { Box, extractBoxProps, type BoxProps } from '../Box';
import * as styles from './TextField.css';

type BoxCompatibleProps<P> = Omit<P, keyof Sprinkles | 'className'>;

export type TextFieldProps = BoxProps<'div', BoxCompatibleProps<PrimitiveTextFieldProps>>;
type TextFieldLabelProps = BoxProps<'label', BoxCompatibleProps<LabelProps>>;
type TextFieldInputProps = BoxProps<'input', BoxCompatibleProps<InputProps>> & {
  variant?: 'normal' | 'compact';
};
type TextFieldDescriptionProps = BoxProps<'span', BoxCompatibleProps<TextProps>>;
type TextFieldErrorProps = BoxProps<'div', BoxCompatibleProps<FieldErrorProps>>;

type TextFieldGroupProps = BoxProps<'div', { children?: ReactNode }>;

type TextFieldInputWrapperProps = BoxProps<'div', { children?: ReactNode }>;

type TextFieldFloatingLabelProps = BoxProps<
  'div',
  {
    children?: ReactNode;
  }
>;

type TextFieldAddonAlign = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';

interface TextFieldAddonProps extends BoxProps<'div', { children?: ReactNode }> {
  align?: TextFieldAddonAlign;
}

const TextFieldLabel = forwardRef<HTMLLabelElement, TextFieldLabelProps>((props, ref) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <LabelPrimitive ref={ref} className={cn(styles.label(), boxProps.className)} {...restProps} />
    </Box>
  );
});

TextFieldLabel.displayName = 'TextField.Label';

const TextFieldInput = forwardRef<HTMLInputElement, TextFieldInputProps>(
  ({ variant = 'normal', ...props }, ref) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <InputPrimitive
          ref={ref}
          className={cn(styles.input({ type: variant }), boxProps.className)}
          {...restProps}
        />
      </Box>
    );
  }
);

TextFieldInput.displayName = 'TextField.Input';

const TextFieldDescription = forwardRef<HTMLSpanElement, TextFieldDescriptionProps>(
  (props, ref) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <TextPrimitive
          ref={ref}
          slot="description"
          className={cn(styles.description(), boxProps.className)}
          {...restProps}
        />
      </Box>
    );
  }
);

TextFieldDescription.displayName = 'TextField.Description';

const TextFieldError = forwardRef<HTMLDivElement, TextFieldErrorProps>((props, ref) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <FieldErrorPrimitive
        ref={ref}
        className={cn(styles.error(), boxProps.className)}
        {...restProps}
      />
    </Box>
  );
});

TextFieldError.displayName = 'TextField.Error';

const TextFieldGroup = forwardRef<HTMLDivElement, TextFieldGroupProps>((props, ref) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <div ref={ref} className={cn(styles.inputGroup(), boxProps.className)} {...restProps} />
    </Box>
  );
});

TextFieldGroup.displayName = 'TextField.Group';

const TextFieldInputWrapper = forwardRef<HTMLDivElement, TextFieldInputWrapperProps>(
  (props, ref) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <div ref={ref} className={cn(styles.inputWrapper(), boxProps.className)} {...restProps} />
      </Box>
    );
  }
);

TextFieldInputWrapper.displayName = 'TextField.InputWrapper';

const TextFieldFloatingLabel = forwardRef<HTMLDivElement, TextFieldFloatingLabelProps>(
  (props, ref) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <div ref={ref} className={cn(styles.floatingLabel(), boxProps.className)} {...restProps} />
      </Box>
    );
  }
);

TextFieldFloatingLabel.displayName = 'TextField.FloatingLabel';

const TextFieldAddon = forwardRef<HTMLDivElement, TextFieldAddonProps>(
  ({ align, ...props }, ref) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <div
          ref={ref}
          data-align={align}
          className={cn(styles.addon(), boxProps.className)}
          {...restProps}
        />
      </Box>
    );
  }
);

TextFieldAddon.displayName = 'TextField.Addon';

const TextField = Object.assign(
  forwardRef<HTMLDivElement, TextFieldProps>(({ children, ...props }, ref) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <PrimitiveTextField
          ref={ref}
          className={cn(styles.textField(), boxProps.className)}
          {...restProps}
        >
          {children}
        </PrimitiveTextField>
      </Box>
    );
  }),
  {
    Label: TextFieldLabel,
    Input: TextFieldInput,
    Description: TextFieldDescription,
    Error: TextFieldError,
    Group: TextFieldGroup,
    InputWrapper: TextFieldInputWrapper,
    FloatingLabel: TextFieldFloatingLabel,
    Addon: TextFieldAddon,
  }
);

TextField.displayName = 'TextField';

export {
  TextField,
  TextFieldAddon,
  TextFieldDescription,
  TextFieldError,
  TextFieldFloatingLabel,
  TextFieldGroup,
  TextFieldInput,
  TextFieldInputWrapper,
  TextFieldLabel,
};

export type {
  TextFieldAddonProps,
  TextFieldDescriptionProps,
  TextFieldErrorProps,
  TextFieldFloatingLabelProps,
  TextFieldGroupProps,
  TextFieldInputProps,
  TextFieldInputWrapperProps,
  TextFieldLabelProps,
};

export default TextField;
