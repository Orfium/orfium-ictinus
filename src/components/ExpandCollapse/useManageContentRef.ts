import * as React from 'react';

export const useManageContentRef = (isExpanded: boolean, transitionDuration: number) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  const manageContentHeight = () => {
    if (contentRef.current === null) {
      throw new Error('Uninitialised element ref');
    }

    if (isExpanded) {
      contentRef.current.style.height = ``;
    } else {
      contentRef.current.style.height = `0`;
    }
  };

  const manageContentVisibility = () => {
    if (contentRef.current === null) {
      throw new Error('Uninitialised element ref');
    }

    let timeout: number;

    if (isExpanded) {
      contentRef.current.style.visibility = '';
    } else {
      timeout = window.setTimeout(() => {
        if (contentRef.current === null) {
          throw new Error('Uninitialised element ref');
        }
        contentRef.current.style.visibility = 'hidden';
      }, transitionDuration);
    }

    return function () {
      clearTimeout(timeout);
    };
  };

  React.useLayoutEffect(manageContentHeight, [isExpanded]);
  React.useLayoutEffect(manageContentVisibility, [isExpanded, transitionDuration]);

  return contentRef;
};
