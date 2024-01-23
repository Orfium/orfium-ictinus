import type { TestProps } from 'utils/types';

type DrawerContent = {
  header?: {
    content: JSX.Element;
    isFixed?: boolean;
  };
  body?: {
    content: JSX.Element;
  };
  footer?: {
    content: JSX.Element;
    isFixed?: boolean;
  };
};

export type AnchorType = 'bottom' | 'left' | 'right' | 'top';

export type DrawerProps = {
  /**  If true, the drawer is open.*/
  isOpen: boolean;
  /** Callback fired when the component requests to be closed. */
  onClose: () => void;
  /** Side from which the overlay will appear. */
  anchor?: AnchorType;
  /** Drawer size are relative to the viewport (percentage) */
  size: number;
  /** The content of the Drawer */
  content?: DrawerContent;
  /** Whether tha background behind the Drawer is interactive. Defaults to false */
  isBackgroundActive?: boolean;
  /** If false, the close button is hidden and the user can add their own custom one. Defaults to true */
  hasCloseButton?: boolean;
} & TestProps;
