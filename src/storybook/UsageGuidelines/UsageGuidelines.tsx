import React, { useMemo } from 'react';

import { iconStyle, WrapperStyle } from './UsageGuidelines.style';

export const UsageGuidelines: React.FC<{ guidelines: string[] }> = ({ guidelines }) => {
  const guidelinesElements = useMemo(
    () =>
      guidelines.map((guideline, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span css={WrapperStyle} key={index}>
          <span css={iconStyle}>➡️</span>
          {guideline}
        </span>
      )),
    [guidelines]
  );

  return <article>{guidelinesElements}</article>;
};

export default UsageGuidelines;
