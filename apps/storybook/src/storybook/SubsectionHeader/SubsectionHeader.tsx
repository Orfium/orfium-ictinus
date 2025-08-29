import { Unstyled } from '@storybook/addon-docs/blocks';
import type { FC } from 'react';

import { Typography, type TypographyVariant } from '@orfium/ictinus';
import { subsectionHeaderWrapper } from './SubsectionHeader.style';

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
