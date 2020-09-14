/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { optionsStyle } from '../../Menu/Menu.style';
import uniqueId from 'lodash/uniqueId';
import Separator from 'components/Breadcrumb/Separator/Separator';
import {
  breadcrumbCollapsedStyles,
  breadcrumbCollapsedWrapperStyles,
  collapsedItemStyles,
  inlineBreadcrumbWrapperStyles,
  ClickAwayListenerStyle,
} from './BreadcrumbCollapsed.style';
import useTheme from 'hooks/useTheme';
import ClickAwayListener from 'components/utils/ClickAwayListener';
import Icon from 'components/Icon';

type Props = {
  /** Defines the react nodes that will be included in the breadcrumb's collapsed view */
  collapsedItems: React.ReactNode[];
};

const BreadcrumbCollapsed: React.FC<Props> = props => {
  const [open, setOpen] = useState<boolean>(false);
  const { collapsedItems } = props;
  const theme = useTheme();
  const expandHandler = () => {
    setOpen(prevState => !prevState);
  };

  const listItems = collapsedItems.map(item => (
    <li key={uniqueId('collapsed_')} css={collapsedItemStyles()(theme)}>
      {item}
    </li>
  ));

  const collapsedItemsList = (
    <ul style={inlineBreadcrumbWrapperStyles} css={optionsStyle({ menuPosition: 'left' })(theme)}>
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
        <span css={breadcrumbCollapsedStyles({ open })(theme)} onClick={expandHandler}>
          <Icon name="dotsVertical" size={22} color={iconColor} />
        </span>
        <Separator />
        {open && collapsedItemsList}
      </div>
    </ClickAwayListener>
  );
};

export default BreadcrumbCollapsed;
