import useTheme from 'hooks/useTheme';
import React, { useMemo } from 'react';

import { Props as MultiTextFieldBase } from './MultiTextFieldBase';
import Icon from 'components/Icon';
import { Props as TextFieldProps } from 'components/TextField/TextField';

type Props = {
  hasValue: boolean;
  isTextfield?: boolean;
} & Pick<MultiTextFieldBase, 'value' | 'onOptionDelete' | 'onClearAllOptions'> &
  Omit<TextFieldProps, 'size'>;

const useMultiTextFieldBaseUtils = ({
  isTextfield,
  label,
  placeholder,
  required,
  locked,
  hasValue,
  value,
  rightIcon,
  onOptionDelete,
  onClearAllOptions,
}: Props) => {
  const TextfieldRef = React.useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const hasLabel = Boolean(label);

  const inputPlaceholder = useMemo(() => {
    if (!label && placeholder && !hasValue) {
      return required ? `${placeholder} *` : placeholder;
    }

    return label;
  }, [hasValue, label, placeholder, required]);

  const iconName = useMemo(() => {
    if (locked) {
      return 'lock';
    }

    if (hasValue) {
      return 'close';
    }

    if (!isTextfield) {
      return 'search';
    }

    return undefined;
  }, [hasValue, isTextfield, locked]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (value === '' && event.key === 'Backspace') {
      onOptionDelete();
    }
  };

  const icon = useMemo(() => {
    if (rightIcon) {
      if (typeof rightIcon === 'string') {
        return <Icon name={rightIcon} size={20} color={theme.utils.getColor('lightGrey', 650)} />;
      }

      return rightIcon;
    }

    if (iconName) {
      return (
        <Icon
          size={20}
          name={iconName}
          color={theme.utils.getColor('lightGrey', 650)}
          onClick={hasValue && !locked ? onClearAllOptions : undefined}
          dataTestId="select-right-icon"
        />
      );
    }

    return undefined;
  }, [hasValue, iconName, locked, onClearAllOptions, rightIcon, theme.utils]);

  return { inputPlaceholder, handleKeyDown, icon, hasLabel, TextfieldRef };
};

export default useMultiTextFieldBaseUtils;
