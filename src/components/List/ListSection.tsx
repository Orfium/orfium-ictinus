import { Section as AriaSection } from '@react-stately/collections';
import { SectionProps } from '@react-types/shared';
import React, { ReactNode } from 'react';

import { ListRowSize } from './types';

export type ListSectionProps = {
  /** Rendered contents of the section, e.g. a header. */
  title: ReactNode;
  /** An accessibility label for the section. */
  'aria-label'?: string;
  /** @default normal */
  rowSize?: ListRowSize;
} & SectionProps<unknown>;

const ListSection: React.FCC<ListSectionProps> = (props) => <AriaSection {...props} />;

// @ts-ignore hack to pass the aria generator to the component as needed
ListSection.getCollectionNode = AriaSection.getCollectionNode;

export default ListSection;
