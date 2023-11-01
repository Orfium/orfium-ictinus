import React from 'react';

import ProgressBar from './components/ProgressBar';
import ProgressCircle from './components/ProgressCircle';
import { ProgressIndicatorProps } from './ProgressIndicator.types';

const ProgressIndicator = React.forwardRef<HTMLDivElement, ProgressIndicatorProps>(
  ({ type = 'linear', value, status = 'normal', isBlock = false, dataTestPrefixId }, ref) => {
    return type === 'linear' ? (
      <ProgressBar
        value={value}
        isBlock={isBlock}
        status={status}
        ref={ref}
        dataTestPrefixId={dataTestPrefixId}
      />
    ) : (
      <ProgressCircle value={value} status={status} ref={ref} dataTestPrefixId={dataTestPrefixId} />
    );
  }
);

ProgressIndicator.displayName = 'ProgressIndicator';

export default ProgressIndicator;
