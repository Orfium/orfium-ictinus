import { Unstyled } from '@storybook/addon-docs/blocks';
import type { FC } from 'react';

import type { TypographyVariant } from '../../components/Typography';
import Typography from '../Typography';
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
