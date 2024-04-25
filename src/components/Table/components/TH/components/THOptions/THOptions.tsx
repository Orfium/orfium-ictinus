import React, { useRef } from 'react';
import { Popover } from 'react-aria-components';

import { SortingOption } from './components';
import { menuStyle } from './THOptions.style';
import IconButton from 'components/IconButton';
import { listStyle } from 'components/List/List.style';
import { MenuWrapper, popoverStyle } from 'components/Menu/Menu.style';

type Props = {
  /** Whether multi-sorting is enabled */
  isMultiSortable?: boolean;
  /** Sorting Callback */
  onSort: (desc?: boolean, isMulti?: boolean) => void;
};

const THOptions: React.FC<Props> = ({ isMultiSortable, onSort }) => {
  const [isBtnOpen, setBtnOpen] = React.useState<boolean>(false);

  const btnRef = useRef(null);

  const handleBtnClick = (e) => {
    if (e?.preventDefault) {
      e?.preventDefault();
    }

    setBtnOpen((isOpen) => !isOpen);
  };

  const handleSelectionChange = (_key) => {
    const key = Array.from(_key).join('');

    const isDesc = key === 'sortDescending';

    onSort(isDesc, isMultiSortable);

    switch (key) {
      case 'sortAscending':
      case 'sortDescending':
        return setBtnOpen(false);
      default:
        return null;
    }
  };

  return (
    <>
      <IconButton
        ref={btnRef}
        iconName="triangleDown"
        aria-label="Menu"
        onClick={handleBtnClick}
        aria-controls={isBtnOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isBtnOpen ? 'true' : undefined}
        type="tertiary"
      />
      <Popover
        triggerRef={btnRef}
        css={popoverStyle}
        isOpen={isBtnOpen}
        onOpenChange={() => setBtnOpen((isOpen) => !isOpen)}
        shouldCloseOnInteractOutside={() => true}
        crossOffset={72}
      >
        <MenuWrapper
          aria-label="Menu"
          selectionMode="multiple"
          css={[listStyle({}), menuStyle()]}
          onSelectionChange={handleSelectionChange}
          disabledKeys={[]}
        >
          <SortingOption isDescending />
          <SortingOption />
        </MenuWrapper>
      </Popover>
    </>
  );
};

export default THOptions;
