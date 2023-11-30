import * as React from 'react';
import { ReactFCC } from 'utils/types';

const useClickAwayListener = (ref: React.MutableRefObject<any>, onClick: (event: MouseEvent) => void, useCapture = false) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      onClick(event);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside, useCapture);

    return () => {
      window.removeEventListener('click', handleClickOutside, useCapture);
    };
  });
}

export type HTMLTagsAllowed = 'div' | 'li' | 'span';

type Props = {
  onClick: () => void;
  CustomHtmlTag?: HTMLTagsAllowed;
  ariaRole?: string;
  cssStyles?: { [key: string]: unknown };
};

const ClickAwayListener: ReactFCC<Props> = ({
  onClick,
  CustomHtmlTag = 'div',
  ariaRole = 'button',
  cssStyles,
  ...props
}) => {
  const wrapperRef = React.useRef(null);
  useClickAwayListener(wrapperRef, onClick);

  return (
    <CustomHtmlTag role={ariaRole} ref={wrapperRef} style={cssStyles}>
      {props.children}
    </CustomHtmlTag>
  );
};

export default ClickAwayListener;
