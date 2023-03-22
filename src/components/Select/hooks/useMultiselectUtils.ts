import React, { useEffect } from 'react';

import { SelectOption } from '../Select';

type Props = {
  selectedOptions: SelectOption[];
  options: SelectOption[];
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  isSearchable: boolean;
  onClear?: () => void;
  onOptionDelete?: (option: SelectOption) => void;
  multi?: boolean;
};

const useMultiselectUtils = ({
  selectedOptions,
  options,
  setSearchValue,
  isSearchable,
  onClear,
  onOptionDelete,
  multi,
}: Props) => {
  /** A state to store the SelectedOptions of the component */
  const [multiSelectedOptions, setMultiSelectedOpts] = React.useState(selectedOptions);

  /** The available options (initial options (from component props) minus the multiSelectedOptions) */
  const [availableMultiSelectOptions, setAvailableMultiSelectOptions] = React.useState<
    SelectOption[]
  >([]);

  useEffect(() => {
    if (multi) {
      const selectedOptsValues = multiSelectedOptions?.map(({ value }) => value) ?? [];

      setAvailableMultiSelectOptions(
        options?.filter((option) => !selectedOptsValues.includes(option.value)) ?? []
      );
    }
  }, [options, multiSelectedOptions, multi]);

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
  };

  const handleClearAllOptions = () => {
    setAvailableMultiSelectOptions([...availableMultiSelectOptions, ...multiSelectedOptions]);
    setMultiSelectedOpts([]);

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
