import useTheme from 'hooks/useTheme';
import React from 'react';
import isEqual from 'react-fast-compare';

import { rem } from '../../theme/utils';
import type { TestProps } from '../../utils/types';
import Icon from '../Icon';
import { IconWrapper } from '../TextField/components/commons';
import type { TextFieldProps } from 'components/TextField/TextField';
import TextInputBase from 'components/TextInputBase';
import { inputStyle } from 'components/TextInputBase/TextInputBase.style';
import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';

export type SearchFieldProps = {
  /** A callback that's called when the user clicks the 'clear' icon */
  onClear: () => void;
} & Omit<TextFieldProps, 'size'> &
  TestProps;

const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>((props, ref) => {
  const { placeholder = 'Search', isDisabled, onClear, dataTestId, value = '', ...rest } = props;

  const theme = useTheme();

  const tokens = getTextInputBaseTokens(theme);

  const isClearVisible = (value as string).length > 0;
  const sx = {
    wrapper: {
      borderRadius: rem(100),
      height: tokens('container.normal'),
    },
    textField: {
      padding: `0 ${tokens('paddingContentLeft')}`,
    },
  };

  return (
    <React.Fragment>
      <TextInputBase dataTestId={dataTestId} isDisabled={isDisabled} sx={sx}>
        <IconWrapper iconPosition="left">
          <Icon name="search" size={20} color={theme.utils.getColor('lightGrey', 650)} />
        </IconWrapper>

        <div css={{ width: '100%' }}>
          <input
            css={inputStyle({ placeholder })}
            placeholder={placeholder}
            disabled={isDisabled}
            value={value}
            ref={ref}
            {...rest}
          />
        </div>

        {isClearVisible && !isDisabled && (
          <Icon
            name="close"
            size={20}
            color={theme.utils.getColor('lightGrey', 650)}
            onClick={() => {
              onClear();
            }}
            hasHover={false}
            dataTestId="search-clear"
          />
        )}
      </TextInputBase>
    </React.Fragment>
  );
});

SearchField.displayName = 'SearchField';

export default React.memo(SearchField, isEqual);
