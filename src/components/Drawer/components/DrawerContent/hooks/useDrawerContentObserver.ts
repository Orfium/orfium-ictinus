import { useCallback, useEffect, useRef } from 'react';

import {
  toggleIsScrollbarOnBottom,
  toggleIsScrollbarOnTop,
  useDrawerContext,
} from 'components/Drawer/DrawerContext';

const useDrawerContentObserver = () => {
  const [, dispatch] = useDrawerContext();

  const contentTopRef = useRef();
  const contentBottomRef = useRef();

  const obTopCallback = useCallback(
    (payload) => {
      dispatch(toggleIsScrollbarOnTop(payload[0].isIntersecting));
    },
    [dispatch]
  );

  const obBottomCallback = useCallback(
    (payload) => {
      dispatch(toggleIsScrollbarOnBottom(payload[0].isIntersecting));
    },
    [dispatch]
  );

  useEffect(() => {
    const obTop = new IntersectionObserver(obTopCallback);

    if (contentTopRef.current) {
      obTop.observe(contentTopRef.current);
    }

    return () => obTop.disconnect();
  }, [obTopCallback, contentTopRef]);

  useEffect(() => {
    const obBottom = new IntersectionObserver(obBottomCallback);

    if (contentBottomRef.current) {
      obBottom.observe(contentBottomRef.current);
    }

    return () => obBottom.disconnect();
  }, [obBottomCallback, contentBottomRef]);

  return { contentTopRef, contentBottomRef };
};

export default useDrawerContentObserver;
