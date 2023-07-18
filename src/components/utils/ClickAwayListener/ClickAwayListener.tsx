import * as React from 'react';
import { useCallback } from 'react';

const useClickAwayListener = (ref: React.MutableRefObject<any>, onClick: () => void) => {
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClick();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export type HTMLTagsAllowed = 'div' | 'li' | 'span';

type ClickAwayListenerProps = {
  onClick: () => void;
  onBlur?: () => void;
  CustomHtmlTag?: HTMLTagsAllowed;
  ariaRole?: string;
  cssStyles?: { [key: string]: unknown };
};

const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({
  onClick,
  onBlur,
  CustomHtmlTag = 'div',
  ariaRole = undefined,
  cssStyles,
  ...props
}) => {
  const wrapperRef = React.useRef(null);
  useClickAwayListener(wrapperRef, onClick);

  const handleBlur = useCallback(
    (e) => {
      const currentTarget = e.currentTarget;

      // Give browser time to focus the next element
      requestAnimationFrame(() => {
        // Check if the new focused element is a child of the original container
        if (!currentTarget.contains(document.activeElement) && onBlur) {
          onBlur();
        }
      });
    },
    [onBlur]
  );

  return (
    <CustomHtmlTag role={ariaRole} ref={wrapperRef} style={cssStyles} onBlur={handleBlur}>
      {props.children}
    </CustomHtmlTag>
  );
};

export default ClickAwayListener;
