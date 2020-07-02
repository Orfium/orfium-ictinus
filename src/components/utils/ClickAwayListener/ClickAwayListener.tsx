import React, { useRef, useEffect } from 'react';

const useClickAwayListener = (ref: React.MutableRefObject<any>, onClick: () => void) => {
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

type Props = {
  onClick: () => void;
  cssStyles?: {};
};

const ClickAwayListener: React.FC<Props> = ({ onClick, cssStyles, ...props }) => {
  const wrapperRef = useRef(null);
  useClickAwayListener(wrapperRef, onClick);

  return (
    <div ref={wrapperRef} style={cssStyles}>
      {props.children}
    </div>
  );
};

export default ClickAwayListener;
