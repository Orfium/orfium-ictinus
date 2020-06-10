/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { Fragment as Aux } from 'react';
import uniqueId from 'lodash/uniqueId';

export type Props = {
  separatorContent?: string;
};

const Breadcrumb: React.FC<Props> = props => {
  const { children } = props;
  const getBreadcrumbItem = (child: any, index: number): JSX.Element => {
    const { separatorContent = '/' } = props;
    const BreadcrumbItem = child.props.originalType;
    const innerText = child.props.children;
    const isLastItem = index === React.Children.toArray(children).length - 1;
    const separator: JSX.Element | boolean = !isLastItem && (
      <span
        css={css`
          margin: auto 4px;
        `}
      >
        {separatorContent}
      </span>
    );

    return (
      <Aux key={uniqueId('breadcrumb_')}>
        <BreadcrumbItem>{innerText}</BreadcrumbItem>
        {separator}
      </Aux>
    );
  };

  const breadcrumb: JSX.Element[] = React.Children.toArray(children).map(getBreadcrumbItem);

  return (
    <div>
      <span
        css={css`
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
        `}
      >
        {breadcrumb}
      </span>
    </div>
  );
};

export default Breadcrumb;
