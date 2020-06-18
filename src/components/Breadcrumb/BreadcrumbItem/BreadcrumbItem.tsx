/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Separator, { SeparatorStyle } from 'components/Breadcrumb/Separator/Separator';
import { breadcrumbItemStyles } from './BreadcrumbItem.style';
import useTheme from 'hooks/useTheme';
import BreadcrumbAdvancedItem from './BreadcrumbAdvancedItem';

type Props = {
  /** Defines the child element that will be rendered inside the list element */
  childComponent: React.ReactNode;
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem: boolean;
  /** Defines the separator's content */
  separatorContent: SeparatorStyle;
  /** Defines the options used to render a Menu button */
  options?: string[];
  /** Defines the method where a developer can manipulate the selection of an menu item */
  onChangeHandler?: (selectedItem: string) => void;
};

const BreadcrumbItem: React.FC<Props> = props => {
  const {
    childComponent,
    isLastItem,
    separatorContent = '>',
    options = undefined,
    onChangeHandler,
  } = props;
  const theme = useTheme();
  const renderComponentBasedOnOptions = options ? (
    <BreadcrumbAdvancedItem onChangeHandler={onChangeHandler} options={options} />
  ) : (
    childComponent
  );

  return (
    <li css={breadcrumbItemStyles({ active: isLastItem })(theme)}>
      {renderComponentBasedOnOptions}
      <Separator isLastItem={isLastItem} separatorContent={separatorContent} />
    </li>
  );
};

export default BreadcrumbItem;
