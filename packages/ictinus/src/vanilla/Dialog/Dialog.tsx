import { type ComponentProps, type ReactNode, type Ref, useEffect, useRef } from 'react';
import type { HeadingProps, TextProps } from 'react-aria-components';
import {
  Button as ButtonPrimitive,
  Dialog as DialogPrimitive,
  Heading,
  Text,
} from 'react-aria-components';

export type DialogProps = ComponentProps<typeof DialogPrimitive>;

/**
 * Accessible dialog surface (React Aria). Compose with trigger + header/body/footer.
 *
 * Typical tree:
 * `DialogTrigger` → overlay content → `Dialog` → `DialogHeader` / `DialogBody` / `DialogFooter`
 *
 * `role` defaults to `"dialog"`; use `"alertdialog"` for destructive confirms.
 *
 * @example
 * import {
 *   Dialog, DialogTrigger, DialogHeader, DialogBody, DialogFooter, Button,
 * } from '@orfium/ictinus/vanilla';
 *
 * <DialogTrigger>Open</DialogTrigger>
 * <Dialog>
 *   <DialogHeader title="Title" description="Optional subtitle" />
 *   <DialogBody>Main content</DialogBody>
 *   <DialogFooter>
 *     <Button variant="primary">Confirm</Button>
 *   </DialogFooter>
 * </Dialog>
 *
 * @see DialogTrigger, DialogHeader, DialogBody, DialogFooter, Popover
 */
const Dialog = ({ role = 'dialog', className, ...props }: DialogProps) => {
  return <DialogPrimitive role={role} className={className} {...props} />;
};

export type DialogTriggerProps = ComponentProps<typeof ButtonPrimitive>;

/**
 * Control that opens the dialog (React Aria `Button` primitive).
 * Place label text or compose with a styled Button as needed.
 */
const DialogTrigger = (props: DialogTriggerProps) => <ButtonPrimitive {...props} />;

/**
 * Dialog header shortcuts. Prefer `title` / `description` over hand-rolling titles.
 */
export interface DialogHeaderOwnProps {
  /**
   * Renders a `DialogTitle`. When omitted, string `children` are promoted to the title.
   */
  title?: string;
  /**
   * Renders a `DialogDescription` under the title.
   */
  description?: string;
  children?: ReactNode;
}

export interface DialogHeaderProps
  extends Omit<ComponentProps<'div'>, 'title'>,
    DialogHeaderOwnProps {}

/**
 * Dialog chrome for title + description. Prefer `title` / `description` props.
 */
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

export interface DialogTitleProps extends HeadingProps {
  ref?: Ref<HTMLHeadingElement>;
}

/**
 * Accessible dialog heading (`slot="title"`). Prefer `DialogHeader title=…` when possible.
 */
const DialogTitle = ({ className, ref, ...props }: DialogTitleProps) => (
  <Heading slot="title" ref={ref} className={className} {...props} />
);

export interface DialogDescriptionProps extends TextProps {
  ref?: Ref<HTMLDivElement>;
}

/**
 * Accessible dialog description (`slot="description"`).
 */
const DialogDescription = ({ className, ref, ...props }: DialogDescriptionProps) => (
  <Text slot="description" className={className} ref={ref} {...props} />
);

export type DialogBodyProps = ComponentProps<'div'>;

/**
 * Scrollable main content region between header and footer.
 */
const DialogBody = ({ className, ref, ...props }: DialogBodyProps) => (
  <div data-slot="dialog-body" ref={ref} className={className} {...props} />
);

export type DialogFooterProps = ComponentProps<'div'>;

/**
 * Action row (usually buttons) pinned to the bottom of the dialog.
 */
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
