import * as React from 'react';

import { errorHandler, generateTestDataId } from '../../utils/helpers';
import { contentStyles } from './ExpandCollapse.style';
import { ExpandCollapseProps } from './ExpandCollapse.types';
import { useManageContentRef } from './useManageContentRef';
import { errors } from './utils';

const ExpandCollapse = (props: ExpandCollapseProps) => {
  const {
    textAndControl,
    component = 'div',
    transitionDuration = 200,
    content,
    children,
    isInitiallyExpanded = false,
    isExpanded: isExternallyControlledExpanded,
    onChange,
    dataTestId,
  } = props;

  errorHandler<ExpandCollapseProps>(errors, props);

  const [isInternallyControlledExpanded, setInternallyControlledExpanded] =
    React.useState(isInitiallyExpanded);

  const Component = component;

  //Case of renderFunction being undefined is handled in error cases.
  const renderFunction = (content ?? children) as (x: boolean) => React.ReactNode;

  const isExpanded = isExternallyControlledExpanded ?? isInternallyControlledExpanded;

  const contentRef = useManageContentRef(isExpanded, transitionDuration);

  const handleStateChange = (e: React.SyntheticEvent) => {
    if (typeof isExternallyControlledExpanded !== 'boolean') {
      setInternallyControlledExpanded(
        (isInternallyControlledExpandedOldState) => !isInternallyControlledExpandedOldState
      );
    } else if (onChange) {
      onChange(e);
    }
  };

  return (
    <Component data-testid={generateTestDataId('expand-collapse', dataTestId)}>
      {textAndControl(handleStateChange, isExpanded)}
      <div css={contentStyles(isExpanded, transitionDuration)} ref={contentRef}>
        {renderFunction(isExpanded)}
      </div>
    </Component>
  );
};

export default ExpandCollapse;
