import type { CSSObject } from '@emotion/react';
import type { AriaAttributes, ReactNode } from 'react';
import type { TabsProps } from '~/components/Tabs';
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
  /** Disable step */
  isDisabled?: boolean;
};

export type TabStepperStylesOverrides = {
  tabsContainer?: CSSObject;
  tabStepList?: CSSObject;
  tabStep?: CSSObject;
};

export type StepperProps = {
  /** The items (steps) */
  items: TabStepItem[];
  /** Position of status icon */
  iconPosition?: 'adjacent' | 'end';
  children?: ReactNode;
  /** Style overrides for TabSteps */
  sx?: TabStepperStylesOverrides;
} & Pick<TabsProps, 'orientation' | 'selectedKey' | 'onSelectionChange'> &
  TestProps;

export type TabStepProps = {
  iconPosition?: 'adjacent' | 'end';
  children?: ReactNode;
  /** Style overrides for TabStep */
  sx?: CSSObject;
} & TabStepItem &
  TestProps;

export type TabStepListProps = {
  /** Style overrides for TabStepList */
  sx?: CSSObject;
  children: ReactNode;
} & AriaAttributes;
