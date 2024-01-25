import { rem } from 'polished';
import { type FCC } from 'react';
import type { TestProps } from 'utils/types';

import useDrawerContentObserver from './hooks/useDrawerContentObserver';
import { contentStyle } from '../../Drawer.style';
import { useDrawerContext } from '../../DrawerContext';

const DrawerContent: FCC<TestProps> = ({ children, dataTestPrefixId = 'ictinus_drawer' }) => {
  const [{ hasFixedLayout }] = useDrawerContext();

  const { contentTopRef, contentBottomRef } = useDrawerContentObserver();

  return (
    <div
      data-testid={`${dataTestPrefixId}_content`}
      css={contentStyle({ hasFixedHeader: hasFixedLayout })}
    >
      <div css={{ height: rem(1) }} ref={contentTopRef} />
      {children}
      <div css={{ height: rem(1) }} ref={contentBottomRef} />
    </div>
  );
};

export default DrawerContent;
