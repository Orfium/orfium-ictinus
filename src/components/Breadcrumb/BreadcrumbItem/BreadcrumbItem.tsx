/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Separator from 'components/Breadcrumb/Separator/Separator';
import { breadcrumbItemStyles } from './BreadcrumbItem.style';
import BreadcrumbAdvancedItem from './BreadcrumbAdvancedItem';

type Props = {
  /** Defines the child element that will be rendered inside the list element */
  childComponent: React.ReactNode;
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem?: boolean;
  /** Defines the options used to render a Menu button */
  options?: string[];
  /** Defines the method where a developer can manipulate the selection of an menu item */
  onChangeHandler?: (selectedItem: string) => void;
  /** Defines the label of the current level of breadcrumb */
  lastItemLabel?: string;
};

const BreadcrumbItem: React.FC<Props> = props => {
  const {
    childComponent,
    isLastItem = false,
    options = undefined,
    onChangeHandler,
    lastItemLabel,
  } = props;
  const renderComponentBasedOnOptions = options ? (
    <BreadcrumbAdvancedItem
      onChangeHandler={onChangeHandler}
      options={options}
      label={lastItemLabel}
    />
  ) : (
    childComponent
  );

  return (
    <li>
      <div css={breadcrumbItemStyles({ active: isLastItem })}>
        {renderComponentBasedOnOptions}
        <Separator isLastItem={isLastItem} />
      </div>
    </li>
  );
};

export default BreadcrumbItem;
