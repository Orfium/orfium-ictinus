import { css } from '@emotion/react';
import { boolean, number } from '@storybook/addon-knobs';
import React from 'react';

import {
  customContentStyle,
  tooltipContainerStyle,
  tooltipRowStyle,
} from './TooltipShowcase.style';
import { rem } from '../../../theme/utils';
import Button from '../../Button';
import Card from '../../Card';
import Chip from '../../Chip';
import Tooltip from '../../Tooltip';

const CustomContent = () => {
  return (
    <Card elevated="02" radius="3">
      <div css={customContentStyle()}>
        <div
          css={css`
            margin-bottom: ${rem(8)};
            color: black;
          `}
        >
          By hover here you can see:
        </div>
        <Chip fill="teal">
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
          <Button
            onClick={() =>
              console.log(
                'The C language combines all the power of assembly language with all the ease-of-use of assembly language.'
              )
            }
          >
            Left
          </Button>
        </Tooltip>
        <Tooltip
          content={content}
          placement={'right'}
          isInteractive={boolean('isInteractive', false)}
          delay={number('delay', 100)}
        >
          <Button
            onClick={() =>
              console.log(
                'A SQL query goes into a bar, walks up to two tables and asks, “Can I join you?'
              )
            }
          >
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
          <Button
            onClick={() =>
              console.log(
                'How do you tell HTML from HTML5? Try it out in Internet Explorer. Did it work? No? It’s HTML5.'
              )
            }
          >
            Top
          </Button>
        </Tooltip>
        <Tooltip
          content={content}
          placement={'bottom'}
          isInteractive={boolean('isInteractive', false)}
          delay={number('delay', 100)}
        >
          <Button
            onClick={() =>
              console.log('Knock knock.\n' + '\n' + 'Race condition.\n' + '\n' + 'Who’s there?')
            }
          >
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
        <Button
          onClick={() => console.log('Hardware (noun): the part of a computer that you can kick.')}
        >
          Right
        </Button>
      </Tooltip>
    </div>
  );
};

export default TooltipShowcase;
