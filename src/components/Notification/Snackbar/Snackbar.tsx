/** @jsx jsx */
import { jsx } from '@emotion/core';
import Icon from 'components/Icon';
import * as React from 'react';
import { NotificationTypes } from '../Notification';
import { typeToIconName } from '../subcomponents/CompactNotification/CompactNotification';
import {
  actionContainer,
  iconContainer,
  closeActionContainer,
  actionsContainer,
  boldMessageContainer,
} from '../Notification.style';
import { cardContainer, topContainer, infoContainer, descriptionContainer } from './Snackbar.style';
import useTheme from '../../../hooks/useTheme';
import Button from '../../Button';
import { TestId } from '../../../utils/types';
import { generateTestDataId } from '../../../utils/helpers';

export type Props = {
  /** The informative message of the Toast */
  message: string;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel: string | undefined;
  /** The primary call-to-action of the Notification */
  primaryCTA: (() => void) | undefined;
  /** The secondary call-to-action label of the Notification */
  secondaryCTALabel: string | undefined;
  /** The secondary call-to-action of the Notification */
  secondaryCTA: (() => void) | undefined;
  /** The description of the Notification (only for toast) */
  description: string | undefined;
  /** The closing call-to-action of the Toast */
  closeCTA: (() => void) | undefined;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const Snackbar: React.FC<Props> = ({
  message,
  type,
  primaryCTALabel = 'OK',
  primaryCTA,
  secondaryCTALabel = 'Cancel',
  secondaryCTA,
  description,
  closeCTA,
  dataTestId,
}) => {
  const { utils } = useTheme();

  return (
    <div css={cardContainer(type)} notification-type="snackbar">
      <div css={topContainer()}>
        <div css={infoContainer()}>
          <div css={iconContainer()}>
            <Icon name={typeToIconName(type)} color={type} size={20} />
          </div>
          <div css={boldMessageContainer()}>{message}</div>
        </div>
        <span
          css={closeActionContainer()}
          onClick={closeCTA}
          data-testid={generateTestDataId('snackbar-close', dataTestId)}
        >
          <Icon name="close" color={utils.getColor('lightGray', 500)} size={20} />
        </span>
      </div>
      <div css={descriptionContainer()}>{description}</div>
      <div css={actionsContainer()}>
        <div
          css={actionContainer()}
          data-testid={generateTestDataId('snackbar-secondary', dataTestId)}
        >
          <Button filled={false} size="sm" onClick={secondaryCTA}>
            {secondaryCTALabel}
          </Button>
        </div>
        <div
          css={actionContainer()}
          data-testid={generateTestDataId('snackbar-primary', dataTestId)}
        >
          <Button type="branded1" size="sm" onClick={primaryCTA}>
            {primaryCTALabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
