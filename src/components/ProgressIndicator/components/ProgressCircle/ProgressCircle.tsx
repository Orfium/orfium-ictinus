import useTheme from 'hooks/useTheme';
import { isUndefined } from 'lodash';
import React, { useMemo } from 'react';
import { ProgressBar as AriaProgressBar } from 'react-aria-components';

import { animationStyles } from './ProgressCircle.style';
import { getProgressIndicatorTokens } from 'components/ProgressIndicator/ProgressIndicator.tokens';
import { ProgressIndicatorProps } from 'components/ProgressIndicator/ProgressIndicator.types';

const ProgressCircle = React.forwardRef<
  HTMLDivElement,
  Pick<ProgressIndicatorProps, 'value' | 'status' | 'size' | 'dataTestPrefixId'>
>(({ value, status, size, dataTestPrefixId }, ref) => {
  const props = {
    ...(value ? { value } : {}),
    ...(!value ? { isIndeterminate: true } : {}),
  };

  const theme = useTheme();
  const tokens = getProgressIndicatorTokens(theme);

  const center = 16;
  const circleSize = useMemo(() => (size === 'normal' ? 24 : 16), [size]);
  const circleStroke = useMemo(() => (size === 'normal' ? 2 : 1.5), [size]);
  const r = 16 - circleStroke;
  const c = 2 * r * Math.PI;

  const hasError = status === 'error';

  return (
    <AriaProgressBar {...props} ref={ref}>
      {({ percentage = value ?? 75 }) => (
        <>
          <svg
            width={circleSize}
            height={circleSize}
            viewBox="0 0 32 32"
            fill="none"
            strokeWidth={circleStroke}
            data-testid={`${dataTestPrefixId}_circular_progress_container`}
          >
            <circle
              cx={center}
              cy={center}
              r={'14px'}
              stroke={hasError ? tokens('error') : tokens('active')}
              strokeDasharray={`${c} ${c}`}
              strokeDashoffset={c - (percentage / 100) * c}
              strokeLinecap="round"
              transform="rotate(-90 16 16)"
              css={animationStyles(isUndefined(value))}
              data-testid={`${dataTestPrefixId}_circular_progress_value`}
            />
          </svg>
        </>
      )}
    </AriaProgressBar>
  );
});

ProgressCircle.displayName = 'ProgressCircle';

export default ProgressCircle;
