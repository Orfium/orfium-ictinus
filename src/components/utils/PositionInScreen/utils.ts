import { head } from 'lodash-es';

export const resizeObserverHandler = (callback: (args: any) => void) =>
  new ResizeObserver((entries) => {
    const parent = head(entries);

    /** If the event is triggered by the element itself then return
     * to avoid an infinite loop
     */
    // @ts-ignore
    if (parent?.target === parent?.contentRect) {
      return;
    }

    if (parent) {
      callback(parent.contentRect.height);
    }
  });
