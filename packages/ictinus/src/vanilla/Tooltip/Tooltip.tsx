import { useControllableState } from '@radix-ui/react-use-controllable-state';
import {
  createContext,
  useContext,
  useRef,
  type ComponentProps,
  type ReactNode,
  type RefObject,
} from 'react';
import type { TooltipProps as TooltipPrimitiveProps } from 'react-aria-components';
import {
  Focusable,
  OverlayArrow,
  Tooltip as TooltipPrimitive,
  TooltipTrigger as TooltipTriggerPrimitive,
} from 'react-aria-components';

import { cn } from '../../utils/cn';
import { type ExtendProps } from '../../utils/ExtendProps';
import { Box, extractBoxProps, type BoxProps } from '../Box';
import * as styles from './Tooltip.css';

const TooltipContext = createContext<{
  triggerRef: RefObject<HTMLElement> | null;
}>({ triggerRef: null });

type TooltipProps = ComponentProps<typeof TooltipTriggerPrimitive> & {
  /**
   * Only show the tooltip when children are partially hidden due to text overflow.
   */
  auto?: boolean;
};

const Tooltip = ({
  delay = 500,
  auto = false,
  defaultOpen = false,
  onOpenChange,
  isOpen: openProp,
  ...props
}: TooltipProps) => {
  const triggerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useControllableState({
    caller: 'Tooltip',
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: openProp,
  });

  return (
    <TooltipContext.Provider value={{ triggerRef }}>
      <TooltipTriggerPrimitive
        delay={delay}
        defaultOpen={auto ? open : defaultOpen}
        isDisabled={auto && openProp === undefined ? undefined : props.isDisabled}
        isOpen={auto ? open : openProp}
        onOpenChange={(isOpen) => {
          if (auto && isOpen && triggerRef.current && !hasTruncatedContent(triggerRef.current)) {
            return;
          }

          setOpen(isOpen);
        }}
        {...props}
      />
    </TooltipContext.Provider>
  );
};

Tooltip.displayName = 'Tooltip';

type TooltipContentProps = Omit<TooltipPrimitiveProps, 'children'> &
  ExtendProps<BoxProps, NonNullable<styles.TooltipVariants>> & {
    showArrow?: boolean;
    children?: ReactNode;
  };

const TooltipContent = ({
  offset = 8,
  inverse = false,
  showArrow = true,
  children,
  className,
  ...props
}: TooltipContentProps) => {
  const { boxProps, restProps } = extractBoxProps(props);

  return (
    <Box asChild className={cn(styles.tooltip({ inverse }), className)} {...boxProps}>
      <TooltipPrimitive {...restProps} offset={offset}>
        {showArrow && (
          <OverlayArrow>
            {inverse ? (
              <svg width={18} height={8} viewBox="0 0 18 8" className={styles.arrowInverse()}>
                <path d="M9.00744 6.52304L1.6397 0.000488281L16.3752 0.000489658L9.00744 6.52304Z" />
                <path
                  d="M9.00337 6.51095L16.3588 0.00158653H18.0034L9.00337 8.00049L0.00337219 0.00158653L1.6397 0.000488281L9.00337 6.51095Z"
                  className={styles.arrowInverseBorder}
                />
              </svg>
            ) : (
              <svg width={15} height={6} viewBox="0 0 15 6" className={styles.arrow()}>
                <path d="M7.5 6L0.500001 -1.22392e-06L14.5 0L7.5 6Z" />
              </svg>
            )}
          </OverlayArrow>
        )}
        {children}
      </TooltipPrimitive>
    </Box>
  );
};

TooltipContent.displayName = 'TooltipContent';

function TooltipTrigger({ ...props }: ComponentProps<typeof Focusable>) {
  const { triggerRef } = useContext(TooltipContext);

  return <Focusable ref={triggerRef} data-slot="tooltip-trigger" {...props} />;
}

TooltipTrigger.displayName = 'TooltipTrigger';

const hasTruncatedContent = (element: HTMLElement) => {
  let truncated = false;

  const elements: Element[] = [element];
  while (!truncated && elements.length) {
    const element = elements.shift();
    if (!(element instanceof HTMLElement)) {
      continue;
    }
    const { offsetHeight, offsetWidth, scrollHeight, scrollWidth } = element;

    if (offsetWidth < scrollWidth || offsetHeight < scrollHeight) {
      truncated = true;
      break;
    }

    elements.push(...element.children);
  }

  return truncated;
};

export { Tooltip, TooltipContent, TooltipTrigger };
export type { TooltipContentProps, TooltipProps };
