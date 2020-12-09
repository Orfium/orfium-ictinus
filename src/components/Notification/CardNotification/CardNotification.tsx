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
import {
  cardContainer,
  topContainer,
  infoContainer,
  descriptionContainer,
} from './CardNotification.style';
import useTheme from '../../../hooks/useTheme';
import Button from '../../Button';

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
  //   /** The data test id if needed */
  //   dataTestId?: TestId;
};

const CardNotification: React.FC<Props> = ({
  message,
  type,
  primaryCTALabel,
  primaryCTA,
  secondaryCTALabel,
  secondaryCTA,
  description,
  closeCTA,
}) => {
  const { utils } = useTheme();

  return (
    <div css={cardContainer(type)}>
      <div css={topContainer()}>
        <div css={infoContainer()}>
          <div css={iconContainer()}>
            <Icon name={typeToIconName(type)} color={type} size={20} />
          </div>
          <div css={boldMessageContainer()}>{message}</div>
        </div>
        <span css={closeActionContainer()} onClick={closeCTA}>
          <Icon name="close" color={utils.getColor('lightGray', 500)} size={20} />
        </span>
      </div>
      <div css={descriptionContainer()}>{description}</div>
      <div css={actionsContainer()}>
        <div css={actionContainer()}>
          <Button filled={false} size="sm" onClick={secondaryCTA}>
            {secondaryCTALabel}
          </Button>
        </div>
        <div css={actionContainer()}>
          <Button type="branded1" size="sm" onClick={primaryCTA}>
            {primaryCTALabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardNotification;
