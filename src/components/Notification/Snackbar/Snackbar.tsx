import * as React from 'react';

import { cardContainer, topContainer, infoContainer, descriptionContainer } from './Snackbar.style';
import useTheme from '../../../hooks/useTheme';
import { generateTestDataId } from '../../../utils/helpers';
import type { TestId } from '../../../utils/types';
import type { NotificationActions, NotificationStyleType, NotificationTypes } from '../Notification';
import { actionContainer, iconContainer, boldMessageContainer } from '../Notification.style';
import { typeToIconName } from '../subcomponents/CompactNotification/CompactNotification';
import NotificationActionsArea from '../subcomponents/NotificationActionsArea';
import Icon from 'components/Icon';

export type SnackbarProps = {
  /** The informative message of the Toast */
  message: string;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The style type of the Notification. Defaults to elevated */
  styleType?: NotificationStyleType;
  /** The description of the Notification (only for toast) */
  description: string | undefined;
  /** The closing call-to-action of the Toast */
  closeCTA: (() => void) | undefined;
  /** The data test id if needed */
  dataTestId?: TestId;
} & NotificationActions;

const Snackbar: React.FCC<SnackbarProps> = ({
  message,
  type,
  styleType = 'elevated',
  primaryCTALabel = 'OK',
  primaryCTA,
  secondaryCTALabel = 'Cancel',
  secondaryCTA,
  description,
  closeCTA,
  dataTestId,
}) => {
  const { utils } = useTheme();

  const hasActions = (primaryCTA && primaryCTALabel) || (secondaryCTA && secondaryCTALabel);

  const theme = useTheme();

  return (
    // @TODO remove the below or change to data-
    // eslint-disable-next-line react/no-unknown-property
    <div css={cardContainer(type, styleType)} notification-type="snackbar">
      <div css={topContainer()}>
        <div css={infoContainer()}>
          <div css={iconContainer()}>
            <Icon
              name={typeToIconName(type)}
              color={theme.globals.oldColors[type][500]}
              size={20}
            />
          </div>
          <div css={boldMessageContainer()}>{message}</div>
        </div>
        <span
          css={actionContainer()}
          onClick={closeCTA}
          data-testid={generateTestDataId('snackbar-close', dataTestId)}
        >
          <Icon name="close" color={utils.getColor('lightGrey', 650)} size={20} />
        </span>
      </div>
      <div
        css={descriptionContainer()}
        data-testid={generateTestDataId('snackbar-description', dataTestId)}
      >
        {description}
      </div>
      {hasActions && (
        <NotificationActionsArea
          primaryCTA={primaryCTA}
          primaryCTALabel={primaryCTALabel}
          secondaryCTA={secondaryCTA}
          secondaryCTALabel={secondaryCTALabel}
          dataTestPrefixId="snackbar"
          dataTestId={dataTestId}
        />
      )}
    </div>
  );
};

export default Snackbar;
