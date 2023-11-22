import { Unstyled } from '@storybook/blocks';
import type { FCC } from 'react';
import React from 'react';

import { sectionHeaderWrapper } from './SectionHeader.style';
import Typography from '../Typography';

export type SectionHeaderProps = {
  title?: string;
};

const SectionHeader: FCC<SectionHeaderProps> = ({ title = '' }) => {
  return (
    <Unstyled>
      <div css={sectionHeaderWrapper()}>
        <Typography variant="headline01">{title}</Typography>
      </div>
    </Unstyled>
  );
};

export default SectionHeader;
