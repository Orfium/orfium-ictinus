import React, { useMemo } from 'react';

import { vars } from '@orfium/tokens';
import type { AcceptedIconNames } from 'components/Icon';
import Icon from 'components/Icon';
import type { TextFieldProps } from 'components/TextField';
import useCombinedRefs from './useCombinedRefs';

/** A custom hook containing all the utils that are shared between field components */
const useFieldUtils = ({
  id,
  suffix,
  size = 'normal',
  status,
  isDisabled,
  ref,
}: Partial<TextFieldProps> & { ref: React.ForwardedRef<HTMLInputElement> }) => {
  const isLocked = status?.type === 'read-only';
  const hintMessageId = status?.hintMessage ? (status?.id ?? `${id}_hintMessage`) : undefined;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const combinedRefs = useCombinedRefs(inputRef, ref);

  const suffixContent = useMemo(() => {
    if ((!isDisabled && isLocked) || typeof suffix === 'string') {
      const iconName = isLocked ? 'lock' : suffix;

      return (
        <Icon
          name={iconName as AcceptedIconNames}
          size={vars.sizing[size === 'compact' ? '4' : '5']}
          color={vars.color.text.default.secondary}
        />
      );
    }

    return suffix;
  }, [isDisabled, isLocked, size, suffix]);

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
