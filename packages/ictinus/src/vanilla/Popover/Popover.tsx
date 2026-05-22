import type {
  DialogTriggerProps,
  PopoverProps as PopoverPrimitiveProps,
} from 'react-aria-components';
import {
  DialogTrigger as DialogTriggerPrimitive,
  OverlayArrow,
  Popover as PopoverPrimitive,
} from 'react-aria-components';

import { cn } from '../../utils/cn';
import { Box, extractBoxProps, type BoxProps } from '../Box';
import {
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../Dialog';
import * as styles from './Popover.css';

type PopoverProps = DialogTriggerProps;
const Popover = (props: PopoverProps) => {
  return <DialogTriggerPrimitive {...props} />;
};

const PopoverTitle = DialogTitle;
const PopoverHeader = DialogHeader;
const PopoverBody = DialogBody;
const PopoverFooter = DialogFooter;

type PopoverContentProps = BoxProps<
  typeof PopoverPrimitive,
  {
    showArrow?: boolean;
  }
> &
  PopoverPrimitiveProps;

const PopoverContent = ({
  children,
  showArrow = false,
  className,
  offset: offsetProp,
  ...props
}: PopoverContentProps) => {
  const { boxProps, restProps } = extractBoxProps(props);
  const offset = offsetProp ?? (showArrow ? 12 : 8);

  return (
    <Box asChild className={cn(styles.popover({}), className)} {...boxProps}>
      <PopoverPrimitive offset={offset} {...restProps}>
        {(values) => (
          <>
            {showArrow && (
              <OverlayArrow className="group">
                <svg width={15} height={6} viewBox="0 0 15 6" className={styles.arrow()}>
                  <path d="M7.5 6L0.500001 -1.22392e-06L14.5 0L7.5 6Z" />
                </svg>
              </OverlayArrow>
            )}
            <div data-slot="popover-inner" style={{ maxHeight: 'inherit', overflowY: 'auto' }}>
              {typeof children === 'function' ? children(values) : children}
            </div>
          </>
        )}
      </PopoverPrimitive>
    </Box>
  );
};

const PopoverTrigger = DialogTrigger;
const PopoverDescription = DialogDescription;

Popover.Trigger = PopoverTrigger;
Popover.Description = PopoverDescription;
Popover.Content = PopoverContent;
Popover.Body = PopoverBody;
Popover.Footer = PopoverFooter;
Popover.Header = PopoverHeader;
Popover.Title = PopoverTitle;

export {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
};
export type { PopoverContentProps, PopoverProps };
