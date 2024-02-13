import useTheme from 'hooks/useTheme';
import React, { useMemo } from 'react';

import type { Props as MultiTextFieldBase } from './MultiTextFieldBase';
import type { SelectOption } from '../Select';
import Icon from 'components/Icon';
import type { TextFieldProps } from 'components/TextField/TextField';
import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';

type Props = {
  hasValue: boolean;
  isTextfield?: boolean;
} & Pick<MultiTextFieldBase, 'value' | 'onOptionDelete' | 'onClearAllOptions'> &
  Omit<TextFieldProps, 'size'>;

const useMultiTextFieldBaseUtils = ({
  isTextfield,
  label,
  placeholder,
  isRequired,
  isLocked,
  hasValue,
  value,
  onOptionDelete,
  onClearAllOptions,
  onKeyDown,
}: Props & { isLocked: boolean }) => {
  const TextfieldRef = React.useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const tokens = getTextInputBaseTokens(theme);

  const hasLabel = Boolean(label);

  const inputPlaceholder = useMemo(() => {
    if (!hasValue && placeholder) {
      return isRequired ? `${placeholder} *` : placeholder;
    }

    if (!hasValue) {
      return label;
    }

    return undefined;
  }, [hasValue, label, placeholder, isRequired]);

  const iconName = useMemo(() => {
    if (isLocked) {
      return 'lock';
    }

    if (hasValue) {
      return 'close';
    }

    if (!isTextfield) {
      return 'search';
    }

    return undefined;
  }, [hasValue, isTextfield, isLocked]);

  const handleKeyDown =
    (option?: SelectOption | string) => (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (value === '' && event.key === 'Backspace') {
        onOptionDelete(option);
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

  const icon = useMemo(() => {
    const handleClick =
      iconName === 'close'
        ? () => {
            return onClearAllOptions();
          }
        : undefined;

    if (iconName) {
      return (
        <Icon
          size={20}
          name={iconName}
          color={tokens('addOn.iconColor')}
          onClick={handleClick}
          dataTestId="select-right-icon"
        />
      );
    }

    return undefined;
  }, [iconName, onClearAllOptions, tokens]);

  return { inputPlaceholder, handleKeyDown, icon, hasLabel, TextfieldRef };
};

export default useMultiTextFieldBaseUtils;
