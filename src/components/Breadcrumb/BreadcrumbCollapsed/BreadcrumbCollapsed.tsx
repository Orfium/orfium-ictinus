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
} from './BreadcrumbCollapsed.style';
import useTheme from 'hooks/useTheme';

type Props = {
  separatorContent: '*' | '>' | '/';
  collapsedItems: React.ReactNode[];
};

const BreadcrumbCollapsed: React.FC<Props> = props => {
  const [opened, setOpened] = useState<boolean>(false);
  const { separatorContent = '>', collapsedItems } = props;
  const theme = useTheme();
  const expandHandler = () => {
    setOpened(prevState => !prevState);
  };

  return (
    <li css={breadcrumbCollapsedWrapperStyles()}>
      <span css={breadcrumbCollapsedStyles()(theme)} onClick={expandHandler}>
        ...
      </span>
      <Separator separatorContent={separatorContent} />
      {opened ? (
        <div css={optionsStyle('left')(theme)}>
          {collapsedItems.map(item => (
            <div key={uniqueId('collapsed_')} css={collapsedItemStyles()(theme)}>
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </li>
  );
};

export default BreadcrumbCollapsed;
