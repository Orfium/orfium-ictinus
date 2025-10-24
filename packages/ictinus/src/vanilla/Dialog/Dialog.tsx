import { type ComponentProps, type Ref, useEffect, useRef } from 'react';
import type { HeadingProps, TextProps } from 'react-aria-components';
import {
  Button as ButtonPrimitive,
  Dialog as DialogPrimitive,
  Heading,
  Text,
} from 'react-aria-components';

const Dialog = ({
  role = 'dialog',
  className,
  ...props
}: ComponentProps<typeof DialogPrimitive>) => {
  return <DialogPrimitive role={role} className={className} {...props} />;
};

const DialogTrigger = (props: ComponentProps<typeof ButtonPrimitive>) => (
  <ButtonPrimitive {...props} />
);

interface DialogHeaderProps extends Omit<ComponentProps<'div'>, 'title'> {
  title?: string;
  description?: string;
}

const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        header.parentElement?.style.setProperty(
          '--dialog-header-height',
          `${entry.target.clientHeight}px`
        );
      }
    });

    observer.observe(header);

    return () => observer.unobserve(header);
  }, []);

  return (
    <div data-slot="dialog-header" ref={headerRef} className={className}>
      {props.title && <DialogTitle>{props.title}</DialogTitle>}
      {props.description && <DialogDescription>{props.description}</DialogDescription>}
      {!props.title && typeof props.children === 'string' ? (
        <DialogTitle>{props.children}</DialogTitle>
      ) : (
        props.children
      )}
    </div>
  );
};

interface DialogTitleProps extends HeadingProps {
  ref?: Ref<HTMLHeadingElement>;
}
const DialogTitle = ({ className, ref, ...props }: DialogTitleProps) => (
  <Heading slot="title" ref={ref} className={className} {...props} />
);

interface DialogDescriptionProps extends TextProps {
  ref?: Ref<HTMLDivElement>;
}
const DialogDescription = ({ className, ref, ...props }: DialogDescriptionProps) => (
  <Text slot="description" className={className} ref={ref} {...props} />
);

type DialogBodyProps = ComponentProps<'div'>;

const DialogBody = ({ className, ref, ...props }: DialogBodyProps) => (
  <div data-slot="dialog-body" ref={ref} className={className} {...props} />
);

type DialogFooterProps = ComponentProps<'div'>;

const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        footer.parentElement?.style.setProperty(
          '--dialog-footer-height',
          `${entry.target.clientHeight}px`
        );
      }
    });

    observer.observe(footer);

    return () => {
      observer.unobserve(footer);
    };
  }, []);

  return <div ref={footerRef} data-slot="dialog-footer" className={className} {...props} />;
};

export {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};

export type {
  DialogBodyProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogTitleProps,
};
