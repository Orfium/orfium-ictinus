import React, { useEffect } from 'react';

import { SelectOption } from '../Select';

type Props = {
  selectedOptions: SelectOption[];
  options: SelectOption[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  isSearchable: boolean;
  onClear?: () => void;
  onOptionDelete?: (option: SelectOption) => void;
  isMulti?: boolean;
};

const useMultiselectUtils = ({
  selectedOptions,
  options,
  setOpen,
  setSearchValue,
  isSearchable,
  onClear,
  onOptionDelete,
  isMulti,
}: Props) => {
  /** A state to store the SelectedOptions of the component */
  const [multiSelectedOptions, setMultiSelectedOpts] = React.useState(selectedOptions);

  /** The available options (initial options (from component props) minus the multiSelectedOptions) */
  const [availableMultiSelectOptions, setAvailableMultiSelectOptions] = React.useState<
    SelectOption[]
  >([]);

  useEffect(() => {
    if (isMulti) {
      const selectedOptsValues = multiSelectedOptions?.map(({ value }) => value) ?? [];

      setAvailableMultiSelectOptions(
        options?.filter((option) => !selectedOptsValues.includes(option.value)) ?? []
      );
    }
  }, [options, multiSelectedOptions, isMulti]);

  /**
   *  If option is provided, delete the specified option
   *  Otherwise, delete the last option (for the case where the user types 'Backspace')
   */
  const handleOptionDelete = (option?: SelectOption) => {
    if (option) {
      setMultiSelectedOpts(multiSelectedOptions.filter((opt) => opt.value !== option?.value));
      setAvailableMultiSelectOptions([...availableMultiSelectOptions, option]);
      if (onOptionDelete) {
        onOptionDelete(option);
      }
    } else {
      if (multiSelectedOptions.length > 0) {
        const lastItem = multiSelectedOptions[multiSelectedOptions.length - 1];
        setMultiSelectedOpts(multiSelectedOptions.filter((opt) => opt.value !== lastItem.value));
        setAvailableMultiSelectOptions([...availableMultiSelectOptions, lastItem]);
      }
    }

    setOpen(false);
  };

  const handleClearAllOptions = () => {
    setAvailableMultiSelectOptions([...availableMultiSelectOptions, ...multiSelectedOptions]);
    setMultiSelectedOpts([]);
    setOpen(false);

    if (onClear) {
      onClear();
    }

    if (isSearchable) {
      setSearchValue('');
    }
  };

  return {
    multiSelectedOptions,
    setMultiSelectedOpts,
    availableMultiSelectOptions,
    setAvailableMultiSelectOptions,
    handleOptionDelete,
    handleClearAllOptions,
  };
};

export default useMultiselectUtils;