import { forwardRef, useEffect, type ReactNode } from 'react';
import type {
  FieldErrorProps,
  InputProps,
  LabelProps,
  TextAreaProps as PrimitiveTextAreaProps,
  TextFieldProps as PrimitiveTextFieldProps,
  TextProps,
} from 'react-aria-components';
import {
  FieldError as FieldErrorPrimitive,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  TextArea as PrimitiveTextArea,
  TextField as PrimitiveTextField,
  Text as TextPrimitive,
} from 'react-aria-components';

import { useObjectRef } from 'react-aria';
import type { Sprinkles } from '../../sprinkles';
import { cn } from '../../utils/cn';
import { Box, extractBoxProps, type BoxProps } from '../Box';
import * as styles from './TextField.css';

type BoxCompatibleProps<P> = Omit<P, keyof Sprinkles | 'className'>;

export type TextFieldProps = BoxProps<'div', BoxCompatibleProps<PrimitiveTextFieldProps>>;
export type TextAreaProps = BoxProps<'textarea', BoxCompatibleProps<PrimitiveTextAreaProps>>;
type TextFieldLabelProps = BoxProps<'label', BoxCompatibleProps<LabelProps>>;
type TextFieldInputProps = BoxProps<'input', BoxCompatibleProps<InputProps>> & {
  variant?: 'normal' | 'compact';
};
type TextFieldDescriptionProps = BoxProps<'span', BoxCompatibleProps<TextProps>>;
type TextFieldErrorProps = BoxProps<'div', BoxCompatibleProps<FieldErrorProps>>;

type TextFieldGroupProps = BoxProps<'div', { children?: ReactNode }>;

type TextFieldFloatingLabelWrapperProps = BoxProps<'div', { children?: ReactNode }>;

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
  ({ variant = 'normal', placeholder = ' ', ...props }, ref) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <InputPrimitive
          ref={ref}
          placeholder={placeholder}
          className={cn(styles.input({ type: variant }), boxProps.className)}
          {...restProps}
        />
      </Box>
    );
  }
);

TextFieldInput.displayName = 'TextField.Input';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <PrimitiveTextArea
        ref={ref}
        className={cn(styles.input({ type: 'normal' }), styles.textArea, boxProps.className)}
        {...restProps}
      />
    </Box>
  );
});

TextArea.displayName = 'TextArea';

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

const TextFieldGroup = forwardRef<HTMLDivElement, TextFieldGroupProps>(
  ({ className, ...props }, ref) => (
    <Box ref={ref} className={cn(styles.inputGroup(), className)} {...props} />
  )
);

TextFieldGroup.displayName = 'TextField.Group';

const TextFieldFloatingLabelWrapper = forwardRef<
  HTMLDivElement,
  TextFieldFloatingLabelWrapperProps
>(({ className, ...props }, ref) => {
  const wrapperRef = useObjectRef(ref);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const textArea = wrapper?.querySelector<HTMLTextAreaElement>(':scope > textarea');
    const floatingLabel = wrapper?.querySelector<HTMLElement>('[data-floating-label]');

    if (!textArea || !floatingLabel) return;

    const resizeObserver = new ResizeObserver(() => {
      floatingLabel.style.setProperty(
        '--floating-label-clip-width',
        `${textArea.getBoundingClientRect().width}px`
      );
    });

    resizeObserver.observe(textArea);

    return () => resizeObserver.disconnect();
  }, [wrapperRef]);

  return (
    <Box ref={wrapperRef} className={cn(styles.floatingLabelWrapper(), className)} {...props} />
  );
});

TextFieldFloatingLabelWrapper.displayName = 'TextField.FloatingLabelWrapper';

const TextFieldFloatingLabel = forwardRef<HTMLDivElement, TextFieldFloatingLabelProps>(
  ({ className, ...props }, ref) => (
    <Box
      data-floating-label
      ref={ref}
      className={cn(styles.floatingLabel(), className)}
      {...props}
    />
  )
);

TextFieldFloatingLabel.displayName = 'TextField.FloatingLabel';

const TextFieldAddon = forwardRef<HTMLDivElement, TextFieldAddonProps>(
  ({ align, className, ...props }, ref) => (
    <Box ref={ref} data-align={align} className={cn(styles.addon(), className)} {...props} />
  )
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
    TextArea,
    Description: TextFieldDescription,
    Error: TextFieldError,
    Group: TextFieldGroup,
    FloatingLabelWrapper: TextFieldFloatingLabelWrapper,
    FloatingLabel: TextFieldFloatingLabel,
    Addon: TextFieldAddon,
  }
);

TextField.displayName = 'TextField';

export {
  TextArea,
  TextField,
  TextFieldAddon,
  TextFieldDescription,
  TextFieldError,
  TextFieldFloatingLabel,
  TextFieldFloatingLabelWrapper,
  TextFieldGroup,
  TextFieldInput,
  TextFieldLabel,
};

export type {
  TextFieldAddonProps,
  TextFieldDescriptionProps,
  TextFieldErrorProps,
  TextFieldFloatingLabelProps,
  TextFieldFloatingLabelWrapperProps,
  TextFieldGroupProps,
  TextFieldInputProps,
  TextFieldLabelProps,
};

export default TextField;
