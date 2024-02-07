import { Unstyled } from '@storybook/blocks';
import { Link } from 'index';
import type { FCC } from 'react';
import React from 'react';

import {
  sectionHeaderWrapper,
  sectionHeaderContainer,
  sectionHeaderLinksDivider,
} from './SectionHeader.style';
import Box from '../../components/Box';
import Typography from '../Typography';
import Tag from 'components/Tag';

export type SectionHeaderProps = {
  title?: string;
  isPending?: boolean;
  sections?: {
    title: string;
    href: string;
  }[];
};

const SectionHeader: FCC<SectionHeaderProps> = ({ title = '', isPending = false, sections }) => {
  return (
    <Unstyled>
      <div css={sectionHeaderWrapper()}>
        <div css={sectionHeaderContainer()}>
          <Typography variant="headline01">{title}</Typography>
          {isPending && (
            <Box ml="6">
              <Tag>v4</Tag>
            </Box>
          )}
        </div>
        {sections && (
          <div css={sectionHeaderContainer()}>
            {sections.map((section, index) => (
              <div key={`link_${section.href}_container`} css={sectionHeaderContainer()}>
                <Link key={`link_${section.href}`} href={section.href} target="_self">
                  {section.title}
                </Link>
                {index !== sections.length - 1 && <div css={sectionHeaderLinksDivider()}>|</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </Unstyled>
  );
};

export default SectionHeader;
