/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { separatorStyles } from './Separator.style';
import useTheme from 'hooks/useTheme';
import Icon from 'components/Icon';

type Props = {
  /** Defines if the current item of the breadcrumb is the last one */
  isLastItem?: boolean;
};

const Separator: React.FC<Props> = props => {
  const { isLastItem = false } = props;
  const theme = useTheme();
  if (isLastItem) return null;

  return (
    <span css={separatorStyles()(theme)}>
      <Icon name={'arrowRight'} color="lightGray700" />
    </span>
  );
};

export default Separator;
