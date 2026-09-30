import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
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

const TextFieldLabel = (props: TextFieldLabelProps) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <LabelPrimitive className={cn(styles.label(), boxProps.className)} {...restProps} />
    </Box>
  );
};

const TextFieldInput = ({ variant = 'normal', ...props }: TextFieldInputProps) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <InputPrimitive
        className={cn(styles.input({ type: variant }), boxProps.className)}
        {...restProps}
      />
    </Box>
  );
};

const TextFieldDescription = (props: TextFieldDescriptionProps) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <TextPrimitive
        slot="description"
        className={cn(styles.description(), boxProps.className)}
        {...restProps}
      />
    </Box>
  );
};

const TextFieldError = (props: TextFieldErrorProps) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <FieldErrorPrimitive className={cn(styles.error(), boxProps.className)} {...restProps} />
    </Box>
  );
};

const TextFieldGroup = (props: TextFieldGroupProps) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <div className={cn(styles.inputGroup(), boxProps.className)} {...restProps} />
    </Box>
  );
};

const TextFieldFloatingLabelWrapper = (props: TextFieldFloatingLabelWrapperProps) => {
  const { boxProps, restProps } = extractBoxProps(props);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <Box asChild {...boxProps}>
      <div
        ref={wrapperRef}
        className={cn(styles.floatingLabelWrapper(), boxProps.className)}
        {...restProps}
      />
    </Box>
  );
};

const TextFieldFloatingLabel = (props: TextFieldFloatingLabelProps) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <div
        data-floating-label
        className={cn(styles.floatingLabel(), boxProps.className)}
        {...restProps}
      />
    </Box>
  );
};

const TextFieldAddon = ({ align, ...props }: TextFieldAddonProps) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild {...boxProps}>
      <div data-align={align} className={cn(styles.addon(), boxProps.className)} {...restProps} />
    </Box>
  );
};

const TextField = Object.assign(
  ({ children, ...props }: TextFieldProps) => {
    const { boxProps, restProps } = extractBoxProps(props);

    return (
      <Box asChild {...boxProps}>
        <PrimitiveTextField className={cn(styles.textField(), boxProps.className)} {...restProps}>
          {children}
        </PrimitiveTextField>
      </Box>
    );
  },
  {
    Label: TextFieldLabel,
    Input: TextFieldInput,
    Description: TextFieldDescription,
    Error: TextFieldError,
    Group: TextFieldGroup,
    FloatingLabelWrapper: TextFieldFloatingLabelWrapper,
    FloatingLabel: TextFieldFloatingLabel,
    Addon: TextFieldAddon,
  }
);

export {
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
