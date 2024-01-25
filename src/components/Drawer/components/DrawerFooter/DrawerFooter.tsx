import type { FCC } from 'react';
import type { TestProps } from 'utils/types';

import { footerStyle } from '../../Drawer.style';
import { useDrawerContext } from '../../DrawerContext';

const DrawerFooter: FCC<TestProps> = ({ children, dataTestPrefixId = 'ictinus_drawer' }) => {
  const { hasFixedLayout } = useDrawerContext();

  return (
    <div data-testid={`${dataTestPrefixId}_footer`} css={footerStyle({ isFixed: hasFixedLayout })}>
      {children}
    </div>
  );
};

export default DrawerFooter;
