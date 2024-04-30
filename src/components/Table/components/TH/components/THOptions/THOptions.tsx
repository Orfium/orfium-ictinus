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
  /** External callback for when the Dropdown Button is clicked */
  onButtonClick?: (value: boolean) => void;
};

const THOptions: React.FC<Props> = ({ isMultiSortable, onSort, onButtonClick }) => {
  const [isBtnOpen, setBtnOpen] = React.useState<boolean>(false);

  const btnRef = useRef(null);

  const handleBtnClick = (e) => {
    if (e?.preventDefault) {
      e?.preventDefault();
    }

    setBtnOpen((isOpen) => {
      onButtonClick(!isOpen);

      return !isOpen;
    });
  };

  const handleSelectionChange = (_key) => {
    const key = Array.from(_key).join('');

    const isDesc = key === 'sortDescending';

    onSort(isDesc, isMultiSortable);

    if (key === 'sortAscending' || key === 'sortDescending') {
      onButtonClick(false);
      setBtnOpen(false);
    }
  };

  return (
    <>
      <IconButton
        ref={btnRef}
        iconName="moreOptions"
        aria-label="Menu"
        onClick={handleBtnClick}
        aria-controls={isBtnOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isBtnOpen ? 'true' : undefined}
        type="tertiary"
        size="compact"
      />
      <Popover
        triggerRef={btnRef}
        css={popoverStyle}
        isOpen={isBtnOpen}
        onOpenChange={() => {
          setBtnOpen((isOpen) => {
            onButtonClick(!isOpen);

            return !isOpen;
          });
        }}
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
