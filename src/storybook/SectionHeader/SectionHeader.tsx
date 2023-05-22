import React, { FC } from 'react';

import { sectionHeaderWrapper } from './SectionHeader.style';
import Typography from '../Typography';

export type SectionHeaderProps = {
  title?: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ title = '' }) => {
  return (
    <div css={sectionHeaderWrapper()}>
      <Typography variant={'headline01'}>{title}</Typography>
    </div>
  );
};

export default SectionHeader;
