import * as React from 'react';
import Menu from '../../Menu/index';

type Props = {
  /** Defines the options used to render a Menu button */
  options?: string[];
  /** Defines the method where a developer can manipulate the selection of an menu item */
  onChangeHandler?: (selectedItem: string) => void;
  /** Defines the label of the current level of breadcrumb */
  label?: string;
};

const BreadcrumbAdvancedItem: React.FC<Props> = props => {
  const { options = undefined, onChangeHandler, label } = props;
  const [selectedItem, setSelectedItem] = React.useState('');

  React.useEffect(() => {
    if (onChangeHandler) {
      onChangeHandler(selectedItem);
    }
  }, [selectedItem]);

  return (
    <Menu
      items={options}
      selectedItem={selectedItem}
      onSelect={option => setSelectedItem(option)}
      buttonText={label}
      rightIconName="arrowDown"
      iconSize={12}
    />
  );
};

export default BreadcrumbAdvancedItem;
