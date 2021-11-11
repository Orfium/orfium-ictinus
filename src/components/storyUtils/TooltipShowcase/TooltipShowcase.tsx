import { css } from '@emotion/react';
import { boolean, number } from '@storybook/addon-knobs';
import React from 'react';

import { rem } from '../../../theme/utils';
import Card from '../../Card';
import Chip from '../../Chip';
import Tooltip from '../../Tooltip';
import {
  customContentStyle,
  tooltipContainerStyle,
  tooltipRowStyle,
} from './TooltipShowcase.style';

const CustomContent = () => {
  return (
    <Card elevated="02" radius="xsm">
      <div css={customContentStyle()}>
        <div
          css={css`
            margin-bottom: ${rem(8)};
            color: black;
          `}
        >
          By hover here you can see:
        </div>
        <Chip fill="teal" shade="100">
          <a href={'/'}>Go to homepage</a>
        </Chip>
      </div>
    </Card>
  );
};

const TooltipShowcase = () => {
  return (
    <div css={tooltipContainerStyle()}>
      <h2>Tooltip with text-only content</h2>
      <div css={tooltipRowStyle()}>
        <Tooltip
          id={'left'}
          content="By hover here you can see useful info"
          placement={'left'}
          interactive={boolean('interactive', false)}
          delay={number('delay', 100)}
        >
          <button>Left</button>
        </Tooltip>
        <Tooltip
          id={'right'}
          content="By hover here you can see useful info"
          placement={'right'}
          interactive={boolean('interactive', false)}
          delay={number('delay', 100)}
        >
          <button>Right</button>
        </Tooltip>
      </div>

      <div css={tooltipRowStyle()}>
        <Tooltip
          id={'top'}
          content="By hover here you can see useful info"
          placement={'top'}
          interactive={boolean('interactive', false)}
          delay={number('delay', 100)}
        >
          <button>Top</button>
        </Tooltip>
        <Tooltip
          id={'bottom'}
          content="By hover here you can see useful info"
          placement={'bottom'}
          interactive={boolean('interactive', false)}
          delay={number('delay', 100)}
        >
          <button>Bottom</button>
        </Tooltip>
      </div>
      <h2>Tooltip with component content</h2>
      <Tooltip
        id={'right'}
        isTransparent
        content={CustomContent()}
        placement={'right'}
        interactive={boolean('interactive', false)}
        delay={number('delay', 100)}
      >
        <button>Right</button>
      </Tooltip>
    </div>
  );
};

export default TooltipShowcase;
