import isEqual from 'lodash/isEqual';
import React, { useEffect } from 'react';

import { SELECT_ALL_OPTION } from '../constants';
import { SelectOption } from '../Select';

type Props = {
  selectedOptions: SelectOption[];
  options: SelectOption[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  isSearchable: boolean;
  onClear?: () => void;
  onOptionDelete?: (option: SelectOption) => void;
  multi?: boolean;
};

const useMultiselectUtils = ({
  selectedOptions,
  options,
  setOpen,
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

  const handleMultiSelectOptionClick = (option: SelectOption) => {
    /** The user clicks the Select All option */
    if (isEqual(option, SELECT_ALL_OPTION)) {
      const [remaining, selected] = availableMultiSelectOptions.reduce(
        (result, element) => {
          result[element.isDisabled ? 0 : 1].push(element);

          return result;
        },
        [[], []] as SelectOption[][]
      );

      setMultiSelectedOpts([...multiSelectedOptions, ...selected]);
      setAvailableMultiSelectOptions(remaining);
      setOpen(false);
    } else {
      setMultiSelectedOpts([...multiSelectedOptions, option]);
      setAvailableMultiSelectOptions(
        availableMultiSelectOptions.filter((opt) => opt.value !== option.value)
      );
    }
  };

  return {
    multiSelectedOptions,
    availableMultiSelectOptions,
    handleOptionDelete,
    handleClearAllOptions,
    handleMultiSelectOptionClick,
  };
};

export default useMultiselectUtils;
