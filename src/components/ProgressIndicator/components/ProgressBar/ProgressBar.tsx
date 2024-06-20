import { isUndefined } from 'lodash-es';
import React from 'react';
import { ProgressBar as AriaProgressBar } from 'react-aria-components';

import { barStyles, fillStyles, progressBarContainer } from './ProgressBar.style';
import type { ProgressIndicatorProps } from 'components/ProgressIndicator/ProgressIndicator.types';

const ProgressBar = React.forwardRef<
  HTMLDivElement,
  Pick<ProgressIndicatorProps, 'value' | 'status' | 'isBlock' | 'dataTestPrefixId'>
>(({ value, status, isBlock = false, dataTestPrefixId }, ref) => {
  const props = {
    ...(isUndefined(value) ? { isIndeterminate: true } : { value }),
  };

  return (
    <AriaProgressBar {...props} css={progressBarContainer({ isBlock })} ref={ref}>
      {() => (
        <div
          css={barStyles({ isBlock })}
          className="bar"
          data-testid={`${dataTestPrefixId}_linear_progress_container`}
        >
          <div
            css={fillStyles({ status, value, isBlock })}
            className="fill"
            data-testid={`${dataTestPrefixId}_linear_progress_value`}
          />
        </div>
      )}
    </AriaProgressBar>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
