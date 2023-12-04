import useKeyboard from 'hooks/useKeyboardEvents';
import { differenceBy, head } from 'lodash';
import debounce from 'lodash/debounce';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import isEqual from 'react-fast-compare';
import { generateTestDataId, generateUniqueID } from 'utils/helpers';

import SelectMenu from './components/SelectMenu/SelectMenu';
import { SELECT_ALL_OPTION } from './constants';
import { suffixContainer, selectWrapper } from './Select.style';
import type { SelectOption, SelectProps } from './types';
import useCombinedRefs from '../../hooks/useCombinedRefs';
import useTheme from '../../hooks/useTheme';
import type { ChangeEvent } from '../../utils/common';
import Box from '../Box';
import Icon from '../Icon';
import TextField from '../TextField';
import ClickAwayListener from '../utils/ClickAwayListener';
import handleSearch from '../utils/handleSearch';
import MultiTextFieldBase from 'components/MultiTextFieldBase/MultiTextFieldBase';
import ProgressIndicator from 'components/ProgressIndicator';
import {
  getTextInputBaseTokens,
  type TextInputBaseTokens,
} from 'components/TextInputBase/TextInputBase.tokens';
import PositionInScreen from 'components/utils/PositionInScreen';

export const emptyValue: SelectOption = { label: '', value: '' };

/** @TODO: Refactor component to reduce Cognitive Complexity */

const Select = React.forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    selectedOption,
    isMulti,
    options,
    size = 'normal',
    isAsync = false,
    isLoading = false,
    asyncSearch = () => {},
    status = { type: 'normal' },
    minCharactersToSearch = 0,
    hasHighlightSearch = false,
    isSearchable = true,
    isVirtualized = false,
    isDisabled,
    dataTestId,
    onChange,
    isCreatable = false,
    hasSelectAllOption = false,
    ...restInputProps
  } = props;

  const listRef = useRef<HTMLUListElement | null>(null);
  const { keyboardProps } = useKeyboard({
    events: {
      keydown: {
        onArrowDown: () => {
          setIsOpen(true);
          // set on diff thread to wait to open
          setTimeout(() => {
            const options = listRef.current?.querySelectorAll('[role="option"]');
            if (options && options?.length > 0) {
              const firstOption = head(options);
              if (firstOption instanceof HTMLElement && typeof firstOption.focus === 'function') {
                firstOption.focus();
              }
            }
          }, 0);
        },
        onEscape: () => {
          combinedRefs?.current?.blur();
          setIsOpen(false);

          handleIconClick();
        },
        onEnter: (e) => {
          const text = (e.target as HTMLInputElement).value;
          if (text.length > 0) {
            setTimeout(() => {
              const firstChild = listRef.current?.firstChild;
              if (firstChild instanceof HTMLElement && typeof firstChild.click === 'function') {
                firstChild.click();
              }
            }, 0);
          }
        },
        onBackspace: () => {
          debouncedOnChange('');
          setIsOpen(true);

          /** When the textField's value equals the selectedOption's label we should clear the field*/
          if (!isMulti) {
            if (selectedOption && onChange && 'label' in selectedOption) {
              if (selectedOption.label === textFieldValue) {
                onChange(undefined);
                setSearchValue('');
                asyncSearch('');
              }
            }
          }
        },
        onAlphaNumerical: () => {
          if (isSearchable) {
            setIsOpen(true);
          }
        },
      },
    },
  });

  const { keyboardProps: menuKeyboardProps } = useKeyboard({
    events: {
      keydown: {
        onEscape: () => {
          setIsOpen(false);
          combinedRefs.current?.focus();
        },
      },
    },
  });

  const theme = useTheme();
  const tokens = getTextInputBaseTokens(theme);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);

  const [searchValue, setSearchValue] = useState('');

  const textFieldValue = useMemo(() => {
    if (Array.isArray(selectedOption)) return searchValue;

    if (!selectedOption) {
      return searchValue;
    }

    return searchValue || selectedOption?.label;
  }, [searchValue, selectedOption]);

  const handleOptionClick = (option: SelectOption) => {
    if (!isMulti) {
      setIsOpen(false);
    }

    if (isSearchable) {
      setSearchValue('');
    }

    if (isMulti === true) {
      if (onChange && selectedOption) {
        if (isEqual(option, SELECT_ALL_OPTION)) {
          onChange(options.filter((o) => !o.isDisabled));
        } else {
          onChange([...selectedOption, option]);
        }
      }
    } else {
      if (onChange) {
        // @ts-ignore
        onChange(option);
      }
    }

    combinedRefs.current?.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedOnChange = useCallback(
    debounce((term) => {
      asyncSearch(term);
    }, 400),
    []
  );

  const handleOnInput = React.useCallback(
    (event: ChangeEvent) => {
      /**
       * For Multiselect: [for now] when we select an option the SelectMenu closes but the user
       * can still type on the input field (so they must be able to see the SelectMenu)
       */
      if (!isOpen) {
        setIsOpen(true);
      }

      handleSearch({
        event,
        isSearchable,
        isAsync,
        setSearchValue,
        onChange: debouncedOnChange,
        minCharactersToSearch,
      });
    },
    [debouncedOnChange, isAsync, isOpen, isSearchable, minCharactersToSearch]
  );

  const filteredOptions = useMemo(() => {
    const optionsToBeFiltered =
      isMulti && Array.isArray(selectedOption)
        ? differenceBy(options, selectedOption, 'value')
        : options;
    const finalOptions: SelectOption[] = [];

    if (isAsync) {
      finalOptions.push(...optionsToBeFiltered);
    } else {
      finalOptions.push(
        ...optionsToBeFiltered
          .filter(
            (option) =>
              !searchValue ||
              option.label.toLowerCase().includes(searchValue.toLowerCase()) ||
              !!option.options?.find((option) =>
                option.label.toLowerCase().includes(searchValue.toLowerCase())
              )
          )
          .map((option) => {
            return option.label.toLowerCase().includes(searchValue.toLowerCase())
              ? option
              : {
                  ...option,
                  options: option.options?.filter((option) =>
                    option.label.toLowerCase().includes(searchValue.toLowerCase())
                  ),
                };
          })
      );
    }

    if (isCreatable) {
      /** Check if the searchValue has an exact result (so no need for "Create..." option) */
      const hasDistinctResult = finalOptions
        .map((item) => item.label.toLowerCase())
        .includes(searchValue.toLowerCase());

      if (!hasDistinctResult && searchValue.length > 0) {
        finalOptions.push({
          value: searchValue,
          label: `Create "${searchValue}"`,
          isCreated: true,
        });
      }
    }

    return finalOptions;
  }, [isMulti, options, selectedOption, isAsync, isCreatable, searchValue]);

  const suffixNameSelector = useMemo(() => {
    if (isSearchable && !Array.isArray(selectedOption)) {
      return searchValue || selectedOption?.value ? 'close' : 'search';
    }

    return 'triangleDown';
  }, [selectedOption, isSearchable, searchValue]);

  const handleIconClick = React.useCallback(() => {
    if (!isSearchable) {
      setIsOpen(!isOpen);
    }
    if (isSearchable && !Array.isArray(selectedOption) && (searchValue || selectedOption?.value)) {
      setSearchValue('');
      if (onChange) {
        if (isMulti) {
          onChange([]);
        } else {
          onChange(undefined);
        }
      }
      asyncSearch('');
    }
  }, [isSearchable, isOpen, selectedOption, searchValue, onChange, asyncSearch, isMulti]);

  const suffixRender = useMemo(
    () => (
      <div css={suffixContainer(isOpen, isSearchable)}>
        {isLoading ? (
          <Box py="2" display="flex" alignItems="center">
            <ProgressIndicator type="circular" dataTestPrefixId="select" />
          </Box>
        ) : (
          <Icon
            size={tokens(`addOn.iconSize.${size}` as TextInputBaseTokens)}
            name={suffixNameSelector}
            color={tokens('addOn.iconColor')}
            onClick={handleIconClick}
            hasHover={false}
            dataTestId="select-right-icon"
          />
        )}
      </div>
    ),
    [isOpen, isSearchable, isLoading, tokens, size, suffixNameSelector, handleIconClick]
  );

  const handleClick = () => {
    if (!isOpen) {
      combinedRefs?.current?.focus();
    } else if (!isSearchable) {
      combinedRefs?.current?.blur();
    }
  };

  /**
   * Boolean flag for the case where we have no options but create functionality - so
   * we can hide the Select All option in that case
   */
  const hasNoOptionsAndIsCreatable =
    isCreatable && filteredOptions.length === 1 && filteredOptions[0].isCreated;

  const selectUniqueId = useRef(generateUniqueID('select_')).current;

  return (
    <ClickAwayListener
      onClick={() => {
        setIsOpen(false);
        setSearchValue('');
      }}
    >
      <div
        {...(!(isDisabled || status.type === 'read-only') && { onClick: handleClick })}
        css={selectWrapper()}
        {...menuKeyboardProps}
      >
        <PositionInScreen
          id={selectUniqueId}
          isVisible={isOpen}
          hasWrapperWidth
          offsetY={8}
          parent={
            isMulti ? (
              <MultiTextFieldBase
                selectedOptions={selectedOption as SelectOption[]}
                onInput={handleOnInput}
                onOptionDelete={(option) => {
                  const items = Array.isArray(selectedOption)
                    ? selectedOption.filter((o) =>
                        typeof option !== 'string' && option
                          ? o.value !== option.value
                          : o.value !== option
                      )
                    : [];

                  if (onChange) onChange(items);
                }}
                onClearAllOptions={() => onChange && onChange([])}
                isLoading={isLoading}
                isDisabled={isDisabled}
                readOnly={!isSearchable}
                dataTestId={generateTestDataId('select-input', dataTestId)}
                {...restInputProps}
                status={status}
                value={textFieldValue}
                ref={combinedRefs}
                autoComplete="off"
                {...keyboardProps}
                onClick={() => setIsOpen(true)}
                role="combobox"
                aria-expanded={isOpen}
                aria-controls={selectUniqueId}
              />
            ) : (
              <TextField
                suffix={suffixRender}
                {...keyboardProps}
                onInput={handleOnInput}
                isReadOnly={!isSearchable}
                isDisabled={isDisabled}
                dataTestId={generateTestDataId('select-input', dataTestId)}
                {...restInputProps}
                onClick={() => setIsOpen(true)}
                status={status}
                value={textFieldValue}
                size={size}
                ref={combinedRefs}
                autoComplete="off"
                role="combobox"
                aria-expanded={isOpen}
                aria-controls={selectUniqueId}
              />
            )
          }
        >
          <SelectMenu
            ref={listRef}
            filteredOptions={filteredOptions}
            handleOptionClick={handleOptionClick}
            selectedOption={isMulti === true || !selectedOption ? emptyValue : selectedOption}
            status={status}
            isLoading={isLoading}
            isVirtualized={isVirtualized}
            size={size}
            hasSelectAllOption={isMulti && hasSelectAllOption && !hasNoOptionsAndIsCreatable}
          />
        </PositionInScreen>
      </div>
    </ClickAwayListener>
  );
});

Select.displayName = 'Select';
export default React.memo(Select, isEqual);
