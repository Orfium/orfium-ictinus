/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { notificationsContainer } from './NotificationsContainer.style';

type Positions = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';

// type NotificationChildren = JSX.Element[];

export type VarietyType = {
  banner: boolean;
  other: boolean;
};

type Props = {
  /** Notifications Container position */
  position: Positions;
  /** Notifications Container children */
  // children: NotificationChildren;
};

// const childrenTypeCheck = (children: NotificationChildren) => {
//   const variety = { banner: false, other: false };
//   React.Children.map(children, child => {
//     if (child && child.type === Banner) {
//       variety.banner = true;
//     } else {
//       variety.other = true;
//     }
//   });

//   return variety;
// };

const NotificationsContainer: React.FC<Props> = ({ children, position }) => {
  // const variety = childrenTypeCheck(children);

  return (
    <div css={notificationsContainer(position)}>
      {/* {children &&
        React.Children.map(children, child => {
          if (variety.banner && variety.other && (child.type === Toast || child.type === Snackbar))
            return React.cloneElement(child, { fullWidth: true });
          else return child;
        })} */}
      {children}
    </div>
  );
};

export default NotificationsContainer;
