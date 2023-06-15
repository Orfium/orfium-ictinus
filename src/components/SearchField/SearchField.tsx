import useTheme from 'hooks/useTheme';
import React from 'react';
import { DEFAULT_SIZE, getTextFieldHeight } from 'utils/size-utils';

import { rem } from '../../theme/utils';
import { TestProps } from '../../utils/types';
import Icon from '../Icon';
import { IconWrapper } from '../TextField/components/commons';
import { TextFieldProps } from 'components/TextField/TextField';
import TextInputBase from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

export type SearchFieldProps = {
  /** A callback that's called when the user clicks the 'clear' icon */
  onClear: () => void;
} & TextFieldProps &
  TestProps;

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>((props, ref) => {
  const {
    placeholder = 'Search',
    isDisabled,
    size = DEFAULT_SIZE,
    isDark = false,
    onClear,
    dataTestId,
    value = '',
    ...rest
  } = props;

  const theme = useTheme();

  const isClearVisible = (value as string).length > 0;
  const sx = {
    wrapper: {
      borderRadius: rem(100),
      // @TODO this is a unique case for the SearchField where we dont need to use the sm height of the TextField, will change in v5
      height: size === 'sm' ? rem(36) : getTextFieldHeight(size),
    },
    input: {
      // @TODO this is a unique case for the SearchField where we dont need to use the sm fontSize of the TextField, will change in v5
      fontSize: size === 'sm' ? theme.globals.typography.fontSize['13'] : undefined,
    },
  };

  return (
    <React.Fragment>
      <TextInputBase
        dataTestId={dataTestId}
        isDisabled={isDisabled}
        size={size}
        styleType={'outlined'}
        leftIcon={'search'}
        rightIcon={'close'}
        sx={sx}
      >
        <IconWrapper iconPosition={'left'}>
          <Icon name={'search'} size={20} color={theme.utils.getColor('lightGrey', 650)} />
        </IconWrapper>

        <div css={{ width: '100%' }}>
          <input
            css={inputStyle({ size, isDark, placeholder })}
            placeholder={placeholder}
            disabled={isDisabled}
            value={value}
            ref={ref}
            {...rest}
          />
        </div>

        {isClearVisible && !isDisabled && (
          <IconWrapper
            onClick={() => {
              onClear();
            }}
            iconPosition={'right'}
          >
            <Icon
              name={'close'}
              size={20}
              color={theme.utils.getColor('lightGrey', 650)}
              dataTestId={'search-clear'}
            />
          </IconWrapper>
        )}
      </TextInputBase>
    </React.Fragment>
  );
});

SearchField.displayName = 'SearchField';

export default SearchField;
