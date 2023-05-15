import useTheme from 'hooks/useTheme';
import React, { useMemo } from 'react';

import Icon from 'components/Icon';
import { SelectOption } from 'components/Select/Select';
import { Props as TextFieldProps } from 'components/TextField/TextField';

type Props = {
  hasValue: boolean;
  value?: string | number;
  onOptionDelete: (option?: SelectOption) => void;
  onClearAllOptions: () => void;
} & Omit<TextFieldProps, 'size'>;

const useMultiSelectBaseUtils = ({
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

    return 'search';
  }, [hasValue, locked]);

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

    return (
      <Icon
        size={20}
        name={iconName}
        color={theme.utils.getColor('lightGrey', 650)}
        onClick={hasValue && !locked ? onClearAllOptions : undefined}
        dataTestId="select-right-icon"
      />
    );
  }, [hasValue, iconName, locked, onClearAllOptions, rightIcon, theme.utils]);

  return { inputPlaceholder, handleKeyDown, icon, hasLabel, TextfieldRef };
};

export default useMultiSelectBaseUtils;
