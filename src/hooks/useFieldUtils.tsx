import React, { useCallback, useMemo } from 'react';

import useCombinedRefs from './useCombinedRefs';
import useTheme from './useTheme';
import Icon, { AcceptedIconNames } from 'components/Icon';
import { TextFieldProps } from 'components/TextField';
import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';

/** A custom hook containing all the utils that are shared between field components */
const useFieldUtils = ({
  id,
  suffix,
  status,
  isDisabled,
  ref,
  sx,
}: Partial<TextFieldProps> & { ref: React.ForwardedRef<HTMLInputElement> }) => {
  const theme = useTheme();
  const tokens = getTextInputBaseTokens(theme);

  const isLocked = status?.type === 'read-only';
  const hintMessageId = status?.hintMessage ? status?.id ?? `${id}_hintMessage` : undefined;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);

  const suffixContent = useMemo(() => {
    if (isLocked || typeof suffix === 'string') {
      const iconName = isLocked ? 'lock' : suffix;

      return (
        <Icon
          name={iconName as AcceptedIconNames}
          size={16}
          color={theme.utils.getColor('lightGrey', 650)}
        />
      );
    }

    return suffix;
  }, [isLocked, suffix, theme.utils]);

  const handleContainerClick = () => {
    if (!isLocked && !isDisabled) {
      combinedRefs.current?.focus();
    }
  };

  const textInputBaseSx = useCallback(
    (hasSx: boolean) => {
      if (hasSx) {
        return {
          textField: {
            paddingRight: tokens('paddingContentLeft'),
          },
          ...sx,
        };
      }

      return { ...sx };
    },
    [sx, tokens]
  );

  return {
    isLocked,
    hintMessageId,
    suffixContent,
    handleContainerClick,
    textInputBaseSx,
    combinedRefs,
  };
};

export default useFieldUtils;
