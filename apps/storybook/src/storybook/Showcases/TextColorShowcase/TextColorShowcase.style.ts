import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';
import { rem } from 'polished';

export const dividerStyle = () =>
  css({
    background: '#E4E7FF',
    height: '1px',
    width: '100%',
    marginTop: '8px',
    marginBottom: '24px',
  });

export const descriptionStyle = (colorCategory: string): SerializedStyles => css`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 4px;
  color: ${vars.color.text[colorCategory === 'inverted' ? 'inverted' : 'default'].secondary};
  font-weight: 500;
  margin-bottom: 36px;
  margin-top: 6px;
  font-size: ${rem(12)};
  p {
    margin-bottom: 4px;
  }
  span {
    background: ${vars.color.palette.secondary.muted};
    border-radius: 4px;
    padding: 4px;
  }
`;
