import * as React from 'react';

export const useManageContentRef = (expanded: boolean, transitionDuration: number) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  const manageContentHeight = () => {
    if (contentRef.current === null) {
      throw new Error('Uninitialised element ref');
    }

    if (expanded) {
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

    if (expanded) {
      contentRef.current.style.visibility = '';
    } else {
      timeout = window.setTimeout(() => {
        if (contentRef.current === null) {
          throw new Error('Uninitialised element ref');
        }
        contentRef.current.style.visibility = 'hidden';
      }, transitionDuration);
    }

    return function() {
      clearTimeout(timeout);
    };
  };

  React.useLayoutEffect(manageContentHeight, [expanded]);
  React.useLayoutEffect(manageContentVisibility, [expanded, transitionDuration]);

  return contentRef;
};
