import * as React from 'react';

import Icon from '../../Icon';
import { separatorStyles } from './Separator.style';

type Props = {
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem?: boolean;
};

const Separator: React.FC<Props> = props => {
  const { isLastItem = false } = props;
  if (isLastItem) return null;

  return (
    <span css={separatorStyles()}>
      <Icon name={'arrowRight'} color="lightGray400" />
    </span>
  );
};

export default Separator;
