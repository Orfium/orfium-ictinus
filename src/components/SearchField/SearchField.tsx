import useTheme from 'hooks/useTheme';
import React from 'react';
import { DEFAULT_SIZE } from 'utils/size-utils';

import { rem } from '../../theme/utils';
import { TestProps } from '../../utils/types';
import Icon from '../Icon';
import { IconWrapper } from '../TextField/components/commons';
import { Props as TextFieldProps } from 'components/TextField/TextField';
import TextInputBase from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';

export type Props = {
  /** A callback that's called when the user clicks the 'clear' icon */
  onClear: () => void;
} & TextFieldProps &
  TestProps;

const SearchField = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
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

  return (
    <React.Fragment>
      <TextInputBase
        dataTestId={dataTestId}
        isDisabled={isDisabled}
        size={size}
        styleType={'outlined'}
        leftIcon={'search'}
        rightIcon={'close'}
        sx={{ wrapper: { borderRadius: rem(100) } }}
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
  }
);

SearchField.displayName = 'SearchField';

export default SearchField;
