import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { CSSObject } from '@emotion/serialize';
import { rem } from 'theme/utils';

import type { TextAreaProps } from './TextArea';
import type { Theme } from '../../theme';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';
import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';
import { body03 } from 'components/Typography/Typography.config.styles';

export const sxProp =
  ({ isResizeEnabled = false }: Partial<TextAreaProps>) =>
  (theme: Theme): { wrapper: CSSObject; textField: CSSObject; input: CSSObject } => {
    const tokens = getTextInputBaseTokens(theme);

    return {
      wrapper: { width: 'auto', height: 'auto' },
      textField: { padding: `${tokens('paddingVertical')} ${tokens('paddingContentLeft')}` },
      input: {
        width: rem(tokens('minWidth.large.normal')),
        minWidth: rem(tokens('minWidth.large.normal')),
        resize: !isResizeEnabled ? 'none' : 'both',

        '& + label': {
          alignItems: 'flex-start',
        },

        '&:focus-within, &:not(:placeholder-shown)': {
          '& + label': {
            transform: `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -4px) scale(0.8)`,
            fontWeight: theme.globals.typography.fontWeight.get('bold'),
          },
        },
      },
    };
  };

export const hintMessageStyle =
  ({ isDisabled }: Pick<TextAreaProps, 'isDisabled'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTextInputBaseTokens(theme);

    return css(
      {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: `${tokens('hintPadding')} 0 0`,
        color: tokens('textColor.inputColorAlt'),
        span: {
          alignItems: 'stretch',
          padding: 0,
        },
        opacity: isDisabled ? theme.tokens.disabledState.get('default') : 1,
      },
      body03(theme)
    );
  };
