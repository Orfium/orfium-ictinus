import type { SerializedStyles } from '@emotion/react';
import { css, keyframes } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

export const loaderWrapperStyle = (): SerializedStyles => {
  return css({
    width: '100%',
    position: 'absolute',
  });
};

export const barWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    return css({
      width: '100%',
      height: rem(4),
      overflow: 'hidden',
      borderTopLeftRadius: theme.dimension.borderRadius.get('md'),
      borderTopRightRadius: theme.dimension.borderRadius.get('md'),
      position: 'relative',

      ':before': {
        content: '""',
        width: '100%',
        height: rem(2),
        display: 'block',
      },
    });
  };

export const barStyle = (): SerializedStyles => {
  const barAnimation = keyframes({
    from: {
      left: '-50%',
    },
    to: {
      left: '100%',
    },
  });

  return css({
    width: '50%',
    background: 'linear-gradient(270deg, #F814E1 0.02%, #4945EE 100%)',
    height: rem(2),
    position: 'absolute',
    bottom: '0',
    top: '0',
    animation: `${barAnimation} 1.5s infinite`,
  });
};
