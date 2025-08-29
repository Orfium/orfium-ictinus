import type { TestProps } from 'utils/types';

export type AnchorType = 'bottom' | 'left' | 'right' | 'top';

export type DrawerProps = {
  /**  If true, the drawer is open.*/
  isOpen: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose: () => void;
  /** Side from which the overlay will appear. */
  anchor?: AnchorType;
  /** Drawer size is directly assigned to width or height css properties */
  size?: string;
  /** Whether the background behind the Drawer is interactive. Defaults to false */
  isBackgroundActive?: boolean;
  /** If true, then the header and footer are fixed positioned */
  hasFixedLayout?: boolean;
  /** The parent element, in which the drawer will be rendered. Defaults to document.body */
  parent?: HTMLElement | null;
} & TestProps;
