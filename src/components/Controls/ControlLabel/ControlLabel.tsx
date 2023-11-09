import React from 'react';
import { TestProps } from 'utils/types';

import { helpTextStyles, labelContainerStyles, labelStyles } from './ControlLabel.style';
import { LabelConfig } from '../Controls.types';

type Props = Pick<LabelConfig, 'size' | 'helpText'> & TestProps;

const ControlLabel: React.FCC<Props> = ({
  size = 'normal',
  helpText,
  dataTestPrefixId,
  children,
}) => {
  return typeof children === 'string' ? (
    <div css={labelContainerStyles()}>
      <div css={labelStyles({ size })} data-testid={`${dataTestPrefixId}_label`}>
        {children}
      </div>
      {helpText && (
        <div css={helpTextStyles()} data-testid={`${dataTestPrefixId}_helpText`}>
          {helpText}
        </div>
      )}
    </div>
  ) : (
    <>{children}</>
  );
};

export default ControlLabel;
