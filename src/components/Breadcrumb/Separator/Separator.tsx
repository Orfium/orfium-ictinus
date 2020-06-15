/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { separatorStyles } from './Separator.style';
import useTheme from 'hooks/useTheme';

export type SeparatorStyle = '*' | '>' | '/';
type Props = {
  separatorContent?: SeparatorStyle;
  isLastItem?: boolean;
};

const Separator: React.FC<Props> = props => {
  const { separatorContent = '/', isLastItem = false } = props;
  const theme = useTheme();

  if (isLastItem) return null;

  return <span css={separatorStyles()(theme)}>{separatorContent}</span>;
};

export default Separator;
