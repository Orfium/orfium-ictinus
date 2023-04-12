import head from 'lodash/head';

export const resizeObserverHandler = (callback: (args: any) => void) =>
  new ResizeObserver((entries) => {
    const parent = head(entries);

    /** If the event is triggered by the element itself then return
     * to avoid an infinite loop
     */
    if (parent?.target === parent?.contentRect) {
      return;
    }

    if (parent) {
      callback(parent.contentRect.height);
    }
  });
