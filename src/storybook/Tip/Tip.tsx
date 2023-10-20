import { css } from '@emotion/react';
import type { FCC } from 'react';
import React from 'react';

import Typography from '../../components/Typography';

export type TipProps = {
  title: string;
};

const Tip: FCC<TipProps> = ({ title = 'Tip', children }) => {
  return (
    <div
      css={css`
        position: relative;
        padding: 16px;
        width: auto;
        height: fit-content;
        background: #e7eefe;
        display: flex;
        line-height: 135%;
        margin: 32px 0;

        h4 {
          margin: 0 0 8px 0;
        }

        p {
          margin: 0;
        }
      `}
    >
      <div
        css={css`
          margin-right: 6px;
        `}
      >
        <span style={{ marginRight: 4 }}>⚡</span>
        <Typography isBold component={'span'}>
          {title}:
        </Typography>
      </div>
      <span style={{ margin: 0 }}>{children}</span>
    </div>
  );
};

export default Tip;
