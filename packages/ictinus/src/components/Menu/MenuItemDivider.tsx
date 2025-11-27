// create divider react component for list item divider

import { css, type CSSObject } from '@emotion/react';
import { rem } from 'polished';
import type { FC } from 'react';
import { Separator } from 'react-aria-components';

import { vars } from '@orfium/tokens';

export type Props = {
  sx?: CSSObject;
};
const MenuItemDivider: FC<Props> = ({ sx }) => {
  return (
    <Separator
      css={[
        css`
          height: ${rem(1)};
          border-color: ${vars.color['border-color'].decorative.default};
          width: 100%;
          margin: auto;
          border-bottom-width: ${rem(1)};
          border-bottom-style: solid;
        `,
        sx,
      ]}
    />
  );
};

export default MenuItemDivider;
