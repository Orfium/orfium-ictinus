/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Fragment as Aux } from 'react';
import { breadcrumbStyles, breadcrumbItemStyles } from './Breadcrumb.style';
import uniqueId from 'lodash/uniqueId';
import useTheme from 'hooks/useTheme';
import Separator from 'components/Breadcrumb/Separator/Separator';

export type Props = {
  separatorContent?: '*' | '>' | '/';
  active?: boolean;
  // flexWrap?: 'nowrap' | 'wrap-reverse';
};

const Breadcrumb: React.FC<Props> = props => {
  const { children } = props;
  const theme = useTheme();

  const getBreadcrumbItem = (child: any, index: number): JSX.Element => {
    const { separatorContent = '>', active = false } = props;
    const BreadcrumbItem = child.props.originalType;
    const innerText = child.props.children;
    const isLastItem = index === React.Children.toArray(children).length - 1;

    return (
      <Aux key={uniqueId('breadcrumb_')}>
        <BreadcrumbItem css={breadcrumbItemStyles({ active })(theme)}>{innerText}</BreadcrumbItem>
        <Separator isLastItem={isLastItem} separatorContent={separatorContent} />
      </Aux>
    );
  };

  const breadcrumb: JSX.Element[] = React.Children.toArray(children).map(getBreadcrumbItem);

  return (
    <div>
      <span css={breadcrumbStyles()(theme)}>{breadcrumb}</span>
    </div>
  );
};

export default Breadcrumb;
