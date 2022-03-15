import useTheme from 'hooks/useTheme';
import React from 'react';
import { DEFAULT_SIZE } from 'utils/size-utils';

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

    return (
      <React.Fragment>
        <TextInputBase
          dataTestId={dataTestId}
          disabled={disabled}
          size={size}
          isSearch
          styleType={'outlined'}
          leftIcon={'search'}
          rightIcon={'close'}
        >
          <IconWrapper iconPosition={'left'}>
            <Icon name={'search'} size={20} color={theme.utils.getColor('lightGrey', 650)} />
          </IconWrapper>

          <div css={{ width: '100%' }}>
            <input
              css={inputStyle({ size, dark, placeholder })}
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
              <Icon name={'close'} size={20} color={theme.utils.getColor('lightGrey', 650)} />
            </IconWrapper>
          )}
        </TextInputBase>
      </React.Fragment>
    );
  }
);

SearchField.displayName = 'SearchField';

export default SearchField;
