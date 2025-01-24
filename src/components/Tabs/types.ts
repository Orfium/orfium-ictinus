import type { CSSObject } from '@emotion/react';
import type { AriaAttributes } from 'react';
import type { Orientation as TabOrientation } from 'react-aria';
import type { Key as TabKey } from 'react-aria-components';

import type { TestProps } from '~/utils/types';

export type { Orientation as TabOrientation } from 'react-aria';
export type { Key as TabKey } from 'react-aria-components';

export type TabItem = {
  /** A unique id for the tab item */
  id: string;
  /** The label of the tab */
  label: string;
  /** Optional counter */
  counter?: number;
};

export type TabsProps = {
  /** The orientation of the Tab */
  orientation?: TabOrientation;
  /** The id of the selected tab */
  selectedKey: TabKey;
  /** Callback to change the selected tab */
  onSelectionChange: (key: TabKey) => void;
  /** The items (tabs) */
  items: TabItem[];
  children?: any;
} & AriaAttributes &
  TestProps;

export type TabsContainerProps = {
  /** The orientation of the Tab */
  orientation?: TabOrientation;
  /** The id of the selected tab */
  selectedKey: TabKey;
  /** Callback to change the selected tab */
  onSelectionChange: (key: TabKey) => void;
  children: any;
} & AriaAttributes;

export type TabProps = {
  /** The id of the tab; it's also used as an indicator of the tab when using selection state */
  id: string;
  children: any;
};

export type TabListProps = {
  /** Style overrides for Tabs */
  sx?: CSSObject;
  children: any;
} & AriaAttributes;

export type TabPanelProps = {
  /** The id of the tab the content corresponds to */
  id: string;
  /** The content of the tab panel */
  children: any;
};
