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

  return (
    <ClickAwayListener onClick={() => setOpen(false)} cssStyles={ClickAwayListenerStyle}>
      <li>
        <div css={breadcrumbCollapsedWrapperStyles()}>
          <span css={breadcrumbCollapsedStyles({ open })(theme)} onClick={expandHandler}>
            <Icon name="dotsVertical" size={22} color={open ? 'white' : 'gray100'} />
          </span>
          <Separator />
          {open ? (
            <ul
              style={inlineBreadcrumbWrapperStyles}
              css={optionsStyle({ menuPosition: 'left' })(theme)}
            >
              {collapsedItems.map(item => (
                <li key={uniqueId('collapsed_')} css={collapsedItemStyles()(theme)}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </li>
    </ClickAwayListener>
  );
};

export default BreadcrumbCollapsed;
