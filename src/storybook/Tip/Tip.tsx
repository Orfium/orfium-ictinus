import { css } from '@emotion/react';
import { Unstyled } from '@storybook/blocks';
import type { FCC } from 'react';
import React from 'react';

import { TipWrapper } from './Tip.style';
import Typography from '../../components/Typography';

export type TipProps = {
  title: string;
};

const Tip: FCC<TipProps> = ({ title = 'Tip', children }) => {
  return (
    <Unstyled>
      <TipWrapper>
        <div
          css={css`
            margin-right: 6px;
          `}
        >
          <span style={{ marginRight: 4 }}>⚡</span>
          <Typography isBold component="span">
            {title}:
          </Typography>
        </div>
        <span style={{ margin: 0 }}>{children}</span>
      </TipWrapper>
    </Unstyled>
  );
};

export default Tip;
