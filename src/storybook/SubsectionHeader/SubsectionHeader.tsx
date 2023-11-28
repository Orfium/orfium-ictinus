import { Unstyled } from '@storybook/blocks';
import type { FC } from 'react';
import React from 'react';

import { subsectionHeaderWrapper } from './SubsectionHeader.style';
import Typography from '../Typography';

export type SectionHeaderProps = {
  title?: string;
};

const SubsectionHeader: FC<SectionHeaderProps> = ({ title = '' }) => {
  return (
    <Unstyled>
      <div css={subsectionHeaderWrapper()}>
        <Typography variant="headline02">{title}</Typography>
      </div>
    </Unstyled>
  );
};

export default SubsectionHeader;
