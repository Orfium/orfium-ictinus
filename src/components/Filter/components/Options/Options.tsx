/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import useTheme from 'hooks/useTheme';
import { generateTestDataId } from 'utils/helpers';
import { FilterOption } from '../../types';
import { defaultOptionStyle, optionStyle } from '../../utils';

import { optionsStyle, emptyStyle } from './Options.style';

interface Props {
  items: FilterOption[];
  onSelect: (option: FilterOption) => void;
  defaultValue: FilterOption,
  selectedItem?: FilterOption,
  shouldDisplayDefaultOption: boolean;
  dataTestId?: string;
}
const Options = ({
   items,
   onSelect,
   defaultValue,
   selectedItem,
   shouldDisplayDefaultOption,
   dataTestId,
 }: Props) => {
  const theme = useTheme();

  return (
    <div css={optionsStyle()(theme)}>
      {shouldDisplayDefaultOption && <button
        type="button"

        data-testid={generateTestDataId('default-option', dataTestId)}
        css={defaultOptionStyle(defaultValue, selectedItem)(theme)}
        onClick={() => {onSelect(defaultValue);}}
      >
        {defaultValue.label}
      </button> }
      {items.length ? (
        items.filter(option => option.value !== defaultValue.value) //filter options just in case the default value is included
        .map((option, index) => (
          <button
            type="button"
            css={optionStyle(option, selectedItem)(theme)}
            key={`${option.value}-${index}`}
            onClick={() => {onSelect(option);}}
          >
            {option.label}
          </button>
        ))
      ) : (
        <div css={emptyStyle()}>No options</div>
     )}
    </div>
  );
};

export default Options;
