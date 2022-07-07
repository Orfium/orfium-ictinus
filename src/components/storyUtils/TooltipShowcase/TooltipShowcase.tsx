import { css } from '@emotion/react';
import { boolean, number } from '@storybook/addon-knobs';
import React from 'react';

import { rem } from '../../../theme/utils';
import Button from '../../Button';
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

const TooltipShowcase = ({ content }: { content: string }) => {
  return (
    <div css={tooltipContainerStyle()}>
      <h2>Tooltip with text-only content</h2>
      <div css={tooltipRowStyle()}>
        <Tooltip
          content={content}
          placement={'left'}
          isInteractive={boolean('isInteractive', false)}
          delay={number('delay', 100)}
        >
          <Button type="primary" transparent>
            Left
          </Button>
        </Tooltip>
        <Tooltip
          content={content}
          placement={'right'}
          isInteractive={boolean('isInteractive', false)}
          delay={number('delay', 100)}
        >
          <Button type="primary" transparent>
            Right
          </Button>
        </Tooltip>
      </div>

      <div css={tooltipRowStyle()}>
        <Tooltip
          content={content}
          placement={'top'}
          isInteractive={boolean('isInteractive', false)}
          delay={number('delay', 100)}
        >
          <Button type="primary" transparent>
            Top
          </Button>
        </Tooltip>
        <Tooltip
          content={content}
          placement={'bottom'}
          isInteractive={boolean('isInteractive', false)}
          delay={number('delay', 100)}
        >
          <Button type="primary" transparent>
            Bottom
          </Button>
        </Tooltip>
      </div>
      <h2>Tooltip with component content</h2>
      <Tooltip
        isTransparent
        content={CustomContent()}
        placement={'right'}
        isInteractive={boolean('isInteractive', false)}
        delay={number('delay', 100)}
      >
        <Button type="primary" transparent>
          Right
        </Button>
      </Tooltip>
    </div>
  );
};

export default TooltipShowcase;
