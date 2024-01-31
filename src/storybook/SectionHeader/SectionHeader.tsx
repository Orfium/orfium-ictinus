import { Unstyled } from '@storybook/blocks';
import type { FCC } from 'react';
import React from 'react';

import { sectionHeaderWrapper } from './SectionHeader.style';
import Box from '../../components/Box';
import Typography from '../Typography';
import Tag from 'components/Tag';

export type SectionHeaderProps = {
  title?: string;
  isPending?: boolean;
};

const SectionHeader: FCC<SectionHeaderProps> = ({ title = '', isPending = false }) => {
  return (
    <Unstyled>
      <div css={sectionHeaderWrapper()}>
        <Typography variant="headline01">{title}</Typography>
        {isPending && (
          <Box ml="6">
            <Tag>v4</Tag>
          </Box>
        )}
      </div>
    </Unstyled>
  );
};

export default SectionHeader;
