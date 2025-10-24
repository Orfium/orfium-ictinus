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

interface PopoverContentProps extends Omit<PopoverPrimitiveProps, 'className'> {
  showArrow?: boolean;
  className?: string;
}

const PopoverContent = ({
  children,
  showArrow = false,
  className,
  ...props
}: PopoverContentProps) => {
  const offset = props.offset ?? (showArrow ? 12 : 8);

  return (
    <PopoverPrimitive offset={offset} className={cn(styles.popover({}), className)} {...props}>
      {(values) => (
        <>
          {showArrow && (
            <OverlayArrow className="group">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                className="group-placement-left:-rotate-90 block fill-overlay stroke-border group-placement-bottom:rotate-180 group-placement-right:rotate-90 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]"
              >
                <path d="M0 0 L6 6 L12 0" />
              </svg>
            </OverlayArrow>
          )}
          {typeof children === 'function' ? children(values) : children}
        </>
      )}
    </PopoverPrimitive>
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
