import * as React from 'react';

import useTheme from '../../../hooks/useTheme';
import Separator from '../../Breadcrumb/Separator/Separator';
import Icon from '../../Icon';
import List from '../../List';
import ClickAwayListener from '../../utils/ClickAwayListener';
import { optionsStyle } from '../../utils/DropdownOptions';
import {
  breadcrumbCollapsedStyles,
  breadcrumbCollapsedWrapperStyles,
  ClickAwayListenerStyle,
  inlineBreadcrumbWrapperStyles,
} from './BreadcrumbCollapsed.style';

type Props = {
  /** Defines the react nodes that will be included in the breadcrumb's collapsed view */
  collapsedItems: React.ReactNode[];
};

const BreadcrumbCollapsed: React.FC<Props> = props => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { collapsedItems } = props;
  const theme = useTheme();
  const expandHandler = () => {
    setOpen(prevState => !prevState);
  };

  const collapsedItemsList = (
    <div style={inlineBreadcrumbWrapperStyles} css={optionsStyle({ menuPosition: 'left' })}>
      <List
        data={collapsedItems}
        rowSize={'small'}
        dataTestId={'collapsed_'}
        handleOptionClick={() => {
          setOpen(false);
        }}
      />
    </div>
  );

  const iconColor = 'lightGrey';
  const iconColorShade = open ? 100 : 700;

  return (
    <ClickAwayListener
      CustomHtmlTag="li"
      ariaRole="listitem"
      onClick={() => setOpen(false)}
      cssStyles={ClickAwayListenerStyle}
    >
      <div css={breadcrumbCollapsedWrapperStyles()}>
        <span css={breadcrumbCollapsedStyles({ open })} onClick={expandHandler}>
          <Icon
            name="dotsVertical"
            size={22}
            color={theme.utils.getColor(iconColor, iconColorShade)}
          />
        </span>
        <Separator />
        {open && collapsedItemsList}
      </div>
    </ClickAwayListener>
  );
};

export default BreadcrumbCollapsed;
