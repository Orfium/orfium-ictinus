import useTheme from 'hooks/useTheme';
import React from 'react';
import { DEFAULT_SIZE } from 'utils/size-utils';

import Icon from '../Icon';
import { IconWrapper } from '../TextField/commons';
import { searchStyle } from './SearchField.style';
import { Props as TextFieldProps } from 'components/TextField/TextField';
import TextInputBase from 'components/TextInputBase';

export type Props = {
  /** A callback that's called when the user click the 'clear' icon */
  onClear?: () => void;
};

const SearchField = React.forwardRef<HTMLInputElement, Props & TextFieldProps>((props, ref) => {
  const theme = useTheme();

  const {
    placeholder = 'Search',
    disabled,
    size = DEFAULT_SIZE,
    dark = false,
    onClear,
    value,
    ...rest
  } = props;

  return (
    <React.Fragment>
      <TextInputBase isSearch styleType={'outlined'} leftIcon={'search'} rightIcon={'close'}>
        <IconWrapper iconPosition={'left'}>
          <Icon name={'search'} size={20} color={theme.utils.getColor('lightGrey', 650)} />
        </IconWrapper>

        <div css={{ width: '100% ' }}>
          <input
            css={searchStyle({ size, dark })}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            ref={ref}
            {...rest}
          />
        </div>

        {onClear && (
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
});

SearchField.displayName = 'SearchField';

export default SearchField;
