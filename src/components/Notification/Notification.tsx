/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';

export type NotificationTypes = 'success' | 'error' | 'info' | 'warning';

export type NotificationVariants = 'inline' | 'banner' | 'toast' | 'modal';

export type Props = {
  /** The (message) informative message of the Notification */
  message: string[];
  /** The variant of the Notification */
  variant: NotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary action of the Notification */
  primaryAction: () => void;
  /** The title (message heading) of the Notification */
  title?: string[];
  /** The description of the Notification */
  description?: string[];
  /** The scondary action of the Notification */
  secondaryAction?: () => void;
};

const Notification: React.FC<Props> = ({
  message,
  variant,
  type,
  primaryAction,
  title,
  description,
  secondaryAction,
}) => {
  return (
    <React.Fragment>
      <h1>message: {message} </h1>
      <h2>type: {type}</h2>
      <h2>variant: {variant}</h2>
    </React.Fragment>
  );
};

export default Notification;
