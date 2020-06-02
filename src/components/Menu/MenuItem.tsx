/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { EventProps } from 'utils/common';

type Props = {};

const MenuItem: React.FC<Props & EventProps> = props => {
  const { children, ...rest } = props;

  return (
    <li
      css={css`
        list-style: none;
        display: block;
        padding: 0.5rem 0.5rem;
        overflow: hidden;
        color: inherit;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1.5;
        cursor: pointer;
        text-align: center;

        &:hover {
          background-color: #359ed0;
          color: white;
        }
      `}
      {...rest}
    >
      {children}
    </li>
  );
};

export default MenuItem;
