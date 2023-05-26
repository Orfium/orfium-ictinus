import useTheme from 'hooks/useTheme';
import React from 'react';
import { DEFAULT_SIZE, getTextFieldHeight } from 'utils/size-utils';

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
};

const SearchField = React.forwardRef<HTMLInputElement, Props & TextFieldProps & TestProps>(
  (props, ref) => {
    const theme = useTheme();

    const {
      placeholder = 'Search',
      disabled,
      size = DEFAULT_SIZE,
      dark = false,
      onClear,
      dataTestId,
      value = '',
      ...rest
    } = props;

    const shouldShowClear = (value as string).length > 0;
    const sx = {
      wrapper: {
        borderRadius: rem(100),
        // @TODO this is a unique case for the SearchField where we dont need to use the sm height of the TextField, will change in v5
        height: size === 'sm' ? rem(36) : getTextFieldHeight(size),
      },
      input: {
        // @TODO this is a unique case for the SearchField where we dont need to use the sm fontSize of the TextField, will change in v5
        fontSize: size === 'sm' ? theme.typography.fontSizes['13'] : undefined,
      },
    };

    return (
      <React.Fragment>
        <TextInputBase
          dataTestId={dataTestId}
          disabled={disabled}
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
              css={inputStyle({ size, dark, placeholder, sx })}
              placeholder={placeholder}
              disabled={disabled}
              value={value}
              ref={ref}
              {...rest}
            />
          </div>

          {shouldShowClear && !disabled && (
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
