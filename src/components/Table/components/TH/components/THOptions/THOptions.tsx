import React, { useRef } from 'react';
import { Popover } from 'react-aria-components';

import { SortingOption } from './components';
import { menuStyle } from './THOptions.style';
import IconButton from 'components/IconButton';
import { listStyle } from 'components/List/List.style';
import { MenuWrapper, popoverStyle } from 'components/Menu/Menu.style';

import type { TestProps } from '~/utils/types';

type Props = {
  /** Whether multi-sorting is enabled */
  isMultiSortable?: boolean;
  /** Sorting Callback */
  onSort: (desc?: boolean, isMulti?: boolean) => void;
  /** External callback for when the Dropdown Button is clicked */
  onButtonClick?: (value: boolean) => void;
} & TestProps;

const THOptions: React.FC<Props> = ({
  isMultiSortable,
  dataTestPrefixId,
  onSort,
  onButtonClick,
}) => {
  const [isBtnOpen, setIsBtnOpen] = React.useState<boolean>(false);

  const btnRef = useRef(null);
  const listRef = useRef(null);

  const handleBtnClick = (e) => {
    if (e?.preventDefault) {
      e?.preventDefault();
    }

    setIsBtnOpen((isOpen) => {
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
      setIsBtnOpen(false);
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
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown') {
            listRef.current.focus();
          }
        }}
        dataTestPrefixId={`${dataTestPrefixId}_more_options`}
      />
      <Popover
        triggerRef={btnRef}
        css={popoverStyle}
        isOpen={isBtnOpen}
        onOpenChange={() => {
          setIsBtnOpen((isOpen) => {
            onButtonClick(!isOpen);

            return !isOpen;
          });
        }}
        shouldCloseOnInteractOutside={() => true}
        crossOffset={72}
      >
        <MenuWrapper
          ref={listRef}
          aria-label="Menu"
          selectionMode="multiple"
          css={[listStyle({}), menuStyle()]}
          onSelectionChange={handleSelectionChange}
          disabledKeys={[]}
        >
          <SortingOption isDescending dataTestId={`${dataTestPrefixId}_more_options_desc`} />
          <SortingOption dataTestId={`${dataTestPrefixId}_more_options_asc`} />
        </MenuWrapper>
      </Popover>
    </>
  );
};

export default THOptions;
