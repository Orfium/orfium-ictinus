import type { CSSObject } from '@emotion/react';
import type { AriaAttributes } from 'react';

import type { TabsProps } from '../Tabs';

import type { TestProps } from '~/utils/types';

export type TabStepItem = {
  /** A unique id for the tab step item */
  id: string;
  /** The title of the step */
  title?: string;
  /** The subtitle of the step */
  subtitle?: string;
  /** The status of the step */
  status?: 'pending' | 'done' | 'warning';
};

export type TabStepperStylesOverrides = {
  tabsContainer?: CSSObject;
  tabStepList?: CSSObject;
  tabStep?: CSSObject;
};

export type StepperProps = {
  /** The items (steps) */
  items: TabStepItem[];
  children?: any;
  /** Style overrides for TabSteps */
  sx?: TabStepperStylesOverrides;
} & Pick<TabsProps, 'orientation' | 'selectedKey' | 'onSelectionChange'> &
  TestProps;

export type TabStepProps = {
  children?: any;
  /** Style overrides for TabStep */
  sx?: CSSObject;
} & TabStepItem &
  TestProps;

export type TabStepListProps = {
  /** Style overrides for TabStepList */
  sx?: CSSObject;
  children: any;
} & AriaAttributes;
