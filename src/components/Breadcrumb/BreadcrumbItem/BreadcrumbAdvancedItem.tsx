/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useEffect } from 'react';
import Menu from 'components/Menu/index';

type Props = {
  /** Defines the options used to render a Menu button */
  options?: string[];
  /** Defines the method where a developer can manipulate the selection of an menu item */
  onChangeHandler?: (selectedItem: string) => void;
};

const BreadcrumbAdvancedItem: React.FC<Props> = props => {
  const { options = undefined, onChangeHandler } = props;
  const [selectedItem, setSelectedItem] = React.useState('');

  useEffect(() => {
    if (onChangeHandler) {
      onChangeHandler(selectedItem);
    }
  }, [selectedItem]);

  return (
    <Menu
      items={options}
      selectedItem={selectedItem}
      onSelect={option => setSelectedItem(option)}
      buttonText={'More'}
      showOptionIcon
    />
  );
};

export default BreadcrumbAdvancedItem;
