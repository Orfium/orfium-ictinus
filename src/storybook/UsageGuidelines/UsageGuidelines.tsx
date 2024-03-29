import { Unstyled } from '@storybook/blocks';
import React, { useMemo } from 'react';

import { iconStyle, WrapperStyle } from './UsageGuidelines.style';

export const UsageGuidelines: React.FCC<{ guidelines: string[]; policies?: string[] }> = ({
  guidelines,
  policies,
}) => {
  const guidelinesElements = useMemo(
    () =>
      guidelines.map((guideline, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span css={WrapperStyle} key={index}>
          <span css={iconStyle}>✅</span>
          <span>{guideline}</span>
        </span>
      )),
    [guidelines]
  );

  const policiesElements = useMemo(
    () =>
      policies?.map((policy, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span css={WrapperStyle} key={index}>
          <span css={iconStyle}>❌</span>
          <span>{policy}</span>
        </span>
      )),
    [policies]
  );

  return (
    <article>
      <Unstyled>
        {guidelinesElements}
        {policiesElements}
      </Unstyled>
    </article>
  );
};

export default UsageGuidelines;
