import React from 'react';
import { Tab as ReactAriaTab } from 'react-aria-components';

import { stepContainer, stepStyles, stepSubtitle, stepTitle } from './TabStep.style';
import type { TabStepProps } from '../../types';

import type { AcceptedIconNames } from '~/components/Icon';
import Icon from '~/components/Icon';
import useTheme from '~/hooks/useTheme';
import type { SemanticColorsKey } from '~/theme/tokens/semantic/colors';

const STATUS_ICON = {
  done: {
    name: 'success' as AcceptedIconNames,
    color: 'indicators.brand' as SemanticColorsKey,
  },
  warning: {
    name: 'warning' as AcceptedIconNames,
    color: 'indicators.error' as SemanticColorsKey,
  },
};

const TabStep = React.forwardRef<HTMLDivElement, TabStepProps>((props, ref) => {
  const {
    children,
    id,
    title,
    subtitle,
    status = 'pending',
    dataTestPrefixId,
    sx,
    ...rest
  } = props;

  const hasIcon = status !== 'pending';

  const theme = useTheme();

  const icon = status !== 'pending' ? STATUS_ICON[status] : null;

  return (
    <ReactAriaTab id={id} {...rest} ref={ref} css={stepStyles(sx)} data-status={status}>
      {children ?? (
        <div css={stepContainer()}>
          {title && (
            <div css={stepTitle()} data-role="title" data-testid={`${dataTestPrefixId}_title`}>
              {title}
              {hasIcon && (
                <Icon
                  name={icon.name}
                  color={theme.tokens.colors.get(icon.color)}
                  dataTestPrefixId={`${dataTestPrefixId}_icon`}
                />
              )}
            </div>
          )}
          {subtitle && (
            <div
              css={stepSubtitle()}
              data-role="subtitle"
              data-testid={`${dataTestPrefixId}_subtitle`}
            >
              {subtitle}
            </div>
          )}
        </div>
      )}
    </ReactAriaTab>
  );
});

TabStep.displayName = 'TabStep';

export default TabStep;
