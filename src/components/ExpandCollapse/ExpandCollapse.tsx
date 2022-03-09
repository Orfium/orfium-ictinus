import * as React from 'react';

import { errorHandler, generateTestDataId } from '../../utils/helpers';
import { contentStyles } from './ExpandCollapse.style';
import { Props } from './ExpandCollapse.types';
import { errors } from './utils';

const ExpandCollapse = (props: Props) => {
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

  errorHandler<Props>(errors, props);

  const [internallyControlledExpanded, setInternallyControlledExpanded] = React.useState(
    initiallyExpanded
  );
  const contentRef = React.useRef<HTMLDivElement>(null);

  const Component = component;

  //Case of renderFunction being undefined is handled in error cases.
  const renderFunction = (content ?? children) as (x: boolean) => React.ReactNode;

  const expanded = externallyControlledExpanded ?? internallyControlledExpanded;

  const handleStateChange = (e: React.SyntheticEvent) => {
    if (typeof externallyControlledExpanded !== 'boolean') {
      setInternallyControlledExpanded(state => !state);
    } else if (onChange) {
      onChange(e);
    }
  };

  const manageContentHeight = () => {
    if (contentRef.current === null) {
      throw new Error('Uninitialised element ref');
    }

    if (expanded) {
      contentRef.current.style.height = ``;
    } else {
      contentRef.current.style.height = `0`;
    }
  };

  const manageContentVisibility = () => {
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
  };

  React.useLayoutEffect(manageContentHeight, [expanded]);
  React.useLayoutEffect(manageContentVisibility, [expanded, transitionDuration]);

  return (
    <Component data-testid={generateTestDataId('expand-collapse', dataTestId)}>
      {textAndControl(handleStateChange, expanded)}
      <div css={contentStyles(expanded, transitionDuration)} ref={contentRef}>
        {renderFunction(expanded)}
      </div>
    </Component>
  );
};

export default ExpandCollapse;

//TODO: Remove on v5 and change import where necessary
export { Props };
