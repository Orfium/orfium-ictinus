import type { FCC } from 'react';
import React from 'react';
import type { TestProps } from 'utils/types';

import { closeIconContainer, headerStyle } from '../../Drawer.style';
import { useDrawerContext } from '../../DrawerContext';
import Icon from 'components/Icon';

const DrawerHeader: FCC<TestProps> = ({ children, dataTestPrefixId = 'ictinus_drawer' }) => {
  const [{ hasFixedLayout, onClose = () => null, isScrollbarOnTop }] = useDrawerContext();

  return (
    <div css={headerStyle({ isFixed: hasFixedLayout, hasBoxShadow: !isScrollbarOnTop })}>
      {children}
      <div css={closeIconContainer()}>
        <Icon name="close" onClick={onClose} dataTestId={`${dataTestPrefixId}_close_button`} />
      </div>
    </div>
  );
};

export default DrawerHeader;
