import * as React from 'react';

import { separatorStyles } from './Separator.style';
import Icon from '../../Icon';

export type SeparatorProps = {
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem?: boolean;
};

const Separator: React.FC<SeparatorProps> = (props) => {
  const { isLastItem = false } = props;
  if (isLastItem) return null;

  return (
    <span css={separatorStyles()}>
      <Icon name={'triangleRight'} color={'lightGrey'} variant={650} size={12} />
    </span>
  );
};

export default Separator;
