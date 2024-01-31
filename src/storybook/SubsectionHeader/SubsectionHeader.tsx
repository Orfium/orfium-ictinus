import { Unstyled } from '@storybook/blocks';
import type { FC } from 'react';
import React from 'react';

import { subsectionHeaderWrapper } from './SubsectionHeader.style';
import type { TypographyVariant } from '../../components/Typography';
import Typography from '../Typography';

export type SectionHeaderProps = {
  title?: string;
  variant?: TypographyVariant;
};

const SubsectionHeader: FC<SectionHeaderProps> = ({ title = '', variant = 'headline02' }) => {
  return (
    <Unstyled>
      <div css={subsectionHeaderWrapper()}>
        <Typography variant={variant}>{title}</Typography>
      </div>
    </Unstyled>
  );
};

export default SubsectionHeader;
