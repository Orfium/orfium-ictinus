import { css } from '@emotion/react';
import React, { FC } from 'react';

import Typography from '../../components/Typography';

export type TipProps = {
  title: string;
};

const Tip: FC<TipProps> = ({ title = 'Tip', children }) => {
  return (
    <div
      css={css`
        position: relative;
        padding: 16px;
        width: fit-content;
        height: fit-content;
        background: #e7eefe;

        margin: 32px 0;

        h4 {
          margin: 0 0 8px 0;
        }
      `}
    >
      <Typography variant={'headline04'}>
        <span style={{ marginRight: 4 }}>🤓</span> {title}
      </Typography>
      <div>{children}</div>
    </div>
  );
};

export default Tip;
