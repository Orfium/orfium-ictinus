import useTheme from 'hooks/useTheme';
import React, { useMemo } from 'react';

import { Props as MultiTextFieldBase } from './MultiTextFieldBase';
import Icon from 'components/Icon';
import { TextFieldProps } from 'components/TextField/TextField';

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
}: Props) => {
  const TextfieldRef = React.useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const hasLabel = Boolean(label);

  const inputPlaceholder = useMemo(() => {
    if (!label && placeholder && !hasValue) {
      return isRequired ? `${placeholder} *` : placeholder;
    }

    return label;
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (value === '' && event.key === 'Backspace') {
      onOptionDelete();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const icon = useMemo(() => {
    const handleClick = () => {
      if (!hasValue || isLocked) {
        return undefined;
      }

      return onClearAllOptions();
    };

    if (iconName) {
      return (
        <Icon
          size={20}
          name={iconName}
          color={theme.utils.getColor('lightGrey', 650)}
          onClick={handleClick}
          dataTestId="select-right-icon"
        />
      );
    }

    return undefined;
  }, [hasValue, iconName, isLocked, onClearAllOptions, theme.utils]);

  return { inputPlaceholder, handleKeyDown, icon, hasLabel, TextfieldRef };
};

export default useMultiTextFieldBaseUtils;
