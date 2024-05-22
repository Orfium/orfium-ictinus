import useTheme from 'hooks/useTheme';
import { isUndefined } from 'lodash';
import React from 'react';
import { ProgressBar as AriaProgressBar } from 'react-aria-components';
import { convertRemToPixels } from 'theme/utils';

import { animationStyles } from './ProgressCircle.style';
import type { ProgressIndicatorProps } from 'components/ProgressIndicator/ProgressIndicator.types';

const ProgressCircle = React.forwardRef<
  HTMLDivElement,
  Pick<ProgressIndicatorProps, 'value' | 'status' | 'dataTestPrefixId'>
>(({ value, status, dataTestPrefixId }, ref) => {
  const props = {
    ...(value ? { value } : {}),
    ...(!value ? { isIndeterminate: true } : {}),
  };

  const theme = useTheme();

  const center = 16;
  const circleSize = theme.dimension.sizing.get('icon.sm');
  const circleStroke = convertRemToPixels(
    Number.parseFloat(theme.dimension.borderWidth.get('active'))
  );
  const r = 16 - circleStroke;
  const c = 2 * r * Math.PI;

  const hasError = status === 'error';

  return (
    <AriaProgressBar {...props} ref={ref} css={{ display: 'flex' }}>
      {({ percentage = value ?? 75 }) => (
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
            r={14}
            stroke={
              hasError
                ? theme.tokens.colors.get('textColor.inverted.error')
                : theme.tokens.colors.get('palette.primary.muted')
            }
            strokeDasharray={`${c} ${c}`}
            strokeDashoffset={c - (percentage / 100) * c}
            strokeLinecap="round"
            transform="rotate(-90 16 16)"
            css={animationStyles(isUndefined(value))}
            data-testid={`${dataTestPrefixId}_circular_progress_value`}
          />
        </svg>
      )}
    </AriaProgressBar>
  );
});

ProgressCircle.displayName = 'ProgressCircle';

export default ProgressCircle;
