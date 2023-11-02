import React, { FC } from 'react';

import { subsectionHeaderWrapper } from './SubsectionHeader.style';
import Typography from '../Typography';

export type SectionHeaderProps = {
  title?: string;
};

const SubsectionHeader: FC<SectionHeaderProps> = ({ title = '' }) => {
  return (
    <div css={subsectionHeaderWrapper()}>
      <Typography variant={'headline02'}>{title}</Typography>
    </div>
  );
};

export default SubsectionHeader;
