import React, { useMemo } from 'react';

import useCombinedRefs from './useCombinedRefs';
import useTheme from './useTheme';
import type { AcceptedIconNames } from 'components/Icon';
import Icon from 'components/Icon';
import type { TextFieldProps } from 'components/TextField';
import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';

/** A custom hook containing all the utils that are shared between field components */
const useFieldUtils = ({
  id,
  suffix,
  size = 'normal',
  status,
  isDisabled,
  ref,
}: Partial<TextFieldProps> & { ref: React.ForwardedRef<HTMLInputElement> }) => {
  const theme = useTheme();
  const tokens = getTextInputBaseTokens(theme);

  const isLocked = status?.type === 'read-only';
  const hintMessageId = status?.hintMessage ? status?.id ?? `${id}_hintMessage` : undefined;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);

  const suffixContent = useMemo(() => {
    if ((!isDisabled && isLocked) || typeof suffix === 'string') {
      const iconName = isLocked ? 'lock' : suffix;

      return (
        <Icon
          name={iconName as AcceptedIconNames}
          size={theme.dimension.sizing.get(`icon.${size === 'compact' ? 'sm' : 'md'}`)}
          color={theme.tokens.colors.get('textColor.default.secondary')}
        />
      );
    }

    return suffix;
  }, [isDisabled, isLocked, size, suffix, tokens]);

  const handleContainerClick = () => {
    if (!isLocked && !isDisabled) {
      combinedRefs.current?.focus();
    }
  };

  return {
    isLocked,
    hintMessageId,
    suffixContent,
    handleContainerClick,
    combinedRefs,
  };
};

export default useFieldUtils;
