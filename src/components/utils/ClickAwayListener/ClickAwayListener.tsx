import React, { MutableRefObject, useCallback } from 'react';
import { useEffect } from 'react';
import { ReactFCC } from 'utils/types';

const useClickAwayListener = (
  ref: MutableRefObject<HTMLElement | null>,
  onClick: (event: MouseEvent) => void,
  useCapture = false
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        onClick(event);
      }
    },
    [onClick, ref]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, useCapture);

    return () => {
      document.removeEventListener('click', handleClickOutside, useCapture);
    };
  }, [handleClickOutside, useCapture]);
};

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
