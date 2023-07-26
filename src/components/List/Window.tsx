import useElementSize from 'hooks/useElementSize';
import { throttle } from 'lodash';
import React, { forwardRef } from 'react';

import useCombinedRefs from '../../hooks/useCombinedRefs';

export type WindowProps = {
  rowHeight: number;
  children: Array<JSX.Element>;
  gap?: number;
  isVirtualizationEnabled?: boolean;
} & React.InputHTMLAttributes<HTMLUListElement>;

const bufferedItems = 5;

/**
 * Custom component to implement virtualization of a Ul list
 * We used a custom solution in order to provide a semantically correct UL list with accessibility (aria) included.
 * Other solutions such as react-window etc couldn't override to use UL lists and pass with ...rest properties
 * */
const Window = forwardRef<HTMLUListElement, WindowProps>(
  ({ rowHeight, children, gap = 0, isVirtualizationEnabled = true, ...rest }, ref) => {
    const [containerRef, { height: containerHeight }] = useElementSize<HTMLUListElement>();
    const combinedRefs = useCombinedRefs(containerRef, ref);
    const [scrollPosition, setScrollPosition] = React.useState(0);

    // get the children to be renderd
    const visibleChildren = React.useMemo(() => {
      if (!isVirtualizationEnabled) {
        return children.map((child, index) => React.cloneElement(child, {}));
      }
      const startIndex = Math.max(Math.floor(scrollPosition / rowHeight) - bufferedItems, 0);
      const endIndex = Math.min(
        Math.ceil((scrollPosition + containerHeight) / rowHeight - 1) + bufferedItems,
        children.length - 1
      );

      return children.slice(startIndex, endIndex + 1).map((child, index) =>
        React.cloneElement(child, {
          style: {
            position: 'absolute',
            top: (startIndex + index) * rowHeight + index * gap,
            height: rowHeight,
            left: 0,
            right: 0,
            lineHeight: `${rowHeight}px`,
          },
        })
      );
    }, [children, containerHeight, rowHeight, scrollPosition, gap, isVirtualizationEnabled]);

    const onScroll = React.useMemo(
      () =>
        throttle(
          function (e: any) {
            setScrollPosition(e.target.scrollTop);
          },
          50,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          { leading: false }
        ),
      []
    );

    return (
      <ul
        onScroll={onScroll}
        {...rest}
        style={{
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          listStyle: 'none',
          padding: 0,
        }}
        ref={combinedRefs}
      >
        {visibleChildren}
      </ul>
    );
  }
);
Window.displayName = 'Window';

export default Window;
