/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactComponentLike } from 'prop-types';
import {
  ReactElement,
  ReactEventHandler,
  SyntheticEvent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { generateTestDataId } from 'utils/helpers';
import { contentStyles } from './ExpandCollapse.style';
import { TestProps } from 'utils/types';

export type Props = {
  /**
   * A function accepting a click handler. Returns the elements containing the text and the
   * expand/collapse button
   * */
  textAndControl: (x: ReactEventHandler) => ReactElement;
  /**
   * The type of the component that wraps the action and content. Must be able to hold a
   * `data-testid` prop
   *
   * @default div
   */
  component?: ReactComponentLike;
  /**
   * Initial expansion state.
   *
   * @default false
   */
  initiallyExpanded?: boolean;
  /**
   * Defining this prop means that the component is controlled
   *
   * @default false
   */
  expanded?: boolean;
  /**
   * Change handler for the case when the component is controlled
   */
  onChange?: ReactEventHandler;
  /**
   * The duration for the appear transition
   *
   * @default 200
   */
  transitionDuration?: number;
  /**
   * A function accepting a boolean representing the current expansion state. Returns the
   * collapsible/expandable content. Mutually exclusive with children.
   */
  content?: (x: boolean) => ReactElement;
  /**
   * A function accepting a boolean representing the current expansion state. Returns the
   * collapsible/expandable content. Mutually exclusive with content.
   */
  children?: (x: boolean) => ReactElement;
} & TestProps;

function ExpandCollapse(props: Props) {
  const {
    textAndControl,
    component = 'div',
    transitionDuration = 200,
    content,
    children,
    initiallyExpanded = false,
    expanded: externallyControlledExpanded,
    onChange,
    dataTestId,
  } = props;

  if (
    (externallyControlledExpanded === undefined && onChange) ||
    (onChange === undefined && typeof externallyControlledExpanded === 'boolean')
  ) {
    throw new Error('If expanded is defined onChange must be defined too and vice versa');
  }

  const [internallyControlledExpanded, setInternallyControlledExpanded] = useState(
    initiallyExpanded
  );
  const contentRef = useRef<HTMLDivElement>(null);

  const Component = component;

  const renderFunction = content ?? children;

  if (renderFunction === undefined) {
    throw new Error('Either content or children must be defined');
  }

  const expanded = externallyControlledExpanded ?? internallyControlledExpanded;

  function handleStateChange(e: SyntheticEvent) {
    if (typeof externallyControlledExpanded !== 'boolean') {
      setInternallyControlledExpanded(state => !state);
    } else {
      if (!onChange) {
        throw new Error('onChange function must be defined');
      }
      onChange(e);
    }
  }

  function manageContentHeight() {
    if (contentRef.current === null) {
      throw new Error('Uninitialised element ref');
    }

    if (expanded) {
      contentRef.current.style.height = ``;
    } else {
      contentRef.current.style.height = `0`;
    }
  }

  function manageContentVisibility() {
    if (contentRef.current === null) {
      throw new Error('Uninitialised element ref');
    }

    let timeout: number;

    if (expanded) {
      contentRef.current.style.visibility = '';
    } else {
      timeout = window.setTimeout(() => {
        if (contentRef.current === null) {
          throw new Error('Uninitialised element ref');
        }
        contentRef.current.style.visibility = 'hidden';
      }, transitionDuration);
    }

    return function() {
      clearTimeout(timeout);
    };
  }

  useLayoutEffect(manageContentHeight, [expanded]);
  useLayoutEffect(manageContentVisibility, [expanded, transitionDuration]);

  return (
    <Component data-testid={generateTestDataId('expand-collapse', dataTestId)}>
      <div>{textAndControl(handleStateChange)}</div>
      <div css={contentStyles(expanded, transitionDuration)} ref={contentRef}>
        {renderFunction(expanded)}
      </div>
    </Component>
  );
}

export default ExpandCollapse;
