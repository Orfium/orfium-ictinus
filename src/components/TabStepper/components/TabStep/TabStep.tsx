import React, { useMemo } from 'react';
import { Tab as ReactAriaTab } from 'react-aria-components';

import { stepContainer, stepStyles, stepSubtitle, stepTitle } from './TabStep.style';
import type { TabStepProps } from '../../types';

import Icon from '~/components/Icon';
import useTheme from '~/hooks/useTheme';

const TabStep = React.forwardRef<HTMLDivElement, TabStepProps>((props, ref) => {
  const { children, id, title, subtitle, status = 'pending', dataTestPrefixId, ...rest } = props;

  const hasIcon = status !== 'pending';

  const theme = useTheme();

  const iconName = useMemo(() => {
    if (status === 'done') {
      return 'success';
    }

    return 'warning';
  }, [status]);

  const iconColor = useMemo(() => {
    if (status === 'done') {
      return 'indicators.brand';
    }

    return 'indicators.error';
  }, [status]);

  return (
    <ReactAriaTab id={id} {...rest} ref={ref} css={stepStyles()} data-status={status}>
      {children ?? (
        <div css={stepContainer()}>
          {title && (
            <div css={stepTitle()} data-role="title" data-testid={`${dataTestPrefixId}_title`}>
              {title}
              {hasIcon && (
                <Icon
                  name={iconName}
                  color={theme.tokens.colors.get(iconColor)}
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
