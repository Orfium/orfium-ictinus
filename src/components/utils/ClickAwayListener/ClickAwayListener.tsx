import * as React from 'react';

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

type Props = {
  onClick: () => void;
  CustomHtmlTag?: HTMLTagsAllowed;
  ariaRole?: string;
  cssStyles?: { [key: string]: unknown };
};

const ClickAwayListener: React.FC<Props> = ({
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
