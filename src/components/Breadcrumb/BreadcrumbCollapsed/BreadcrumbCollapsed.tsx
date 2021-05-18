/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import uniqueId from 'lodash/uniqueId';
import * as React from 'react';
import Separator from '../../Breadcrumb/Separator/Separator';
import Icon from '../../Icon';
import { optionsStyle } from '../../utils/DropdownOptions';
import ClickAwayListener from '../../utils/ClickAwayListener';
import {
  breadcrumbCollapsedStyles,
  breadcrumbCollapsedWrapperStyles,
  ClickAwayListenerStyle,
  collapsedItemStyles,
  inlineBreadcrumbWrapperStyles,
} from './BreadcrumbCollapsed.style';

type Props = {
  /** Defines the react nodes that will be included in the breadcrumb's collapsed view */
  collapsedItems: React.ReactNode[];
};

const BreadcrumbCollapsed: React.FC<Props> = props => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { collapsedItems } = props;
  const expandHandler = () => {
    setOpen(prevState => !prevState);
  };

  const listItems = collapsedItems.map(item => (
    <li key={uniqueId('collapsed_')} css={collapsedItemStyles()}>
      {item}
    </li>
  ));

  const collapsedItemsList = (
    <ul style={inlineBreadcrumbWrapperStyles} css={optionsStyle({ menuPosition: 'left' })}>
      {listItems}
    </ul>
  );

  const iconColor = open ? 'lightGray100' : 'lightGray700';

  return (
    <ClickAwayListener
      CustomHtmlTag="li"
      ariaRole="listitem"
      onClick={() => setOpen(false)}
      cssStyles={ClickAwayListenerStyle}
    >
      <div css={breadcrumbCollapsedWrapperStyles()}>
        <span css={breadcrumbCollapsedStyles({ open })} onClick={expandHandler}>
          <Icon name="dotsVertical" size={22} color={iconColor} />
        </span>
        <Separator />
        {open && collapsedItemsList}
      </div>
    </ClickAwayListener>
  );
};

export default BreadcrumbCollapsed;
