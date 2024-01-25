import { useContext, type FCC } from 'react';
import type { TestProps } from 'utils/types';

import { contentStyle } from '../../Drawer.style';
import { DrawerContext } from '../../DrawerContext';

const DrawerContent: FCC<TestProps> = ({ children, dataTestPrefixId = 'ictinus_drawer' }) => {
  const { hasFixedLayout } = useContext(DrawerContext);

  return (
    <div
      data-testid={`${dataTestPrefixId}_content`}
      css={contentStyle({ hasFixedHeader: hasFixedLayout })}
    >
      {children}
    </div>
  );
};

export default DrawerContent;
