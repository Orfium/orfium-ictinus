import React, { FC } from 'react';

import { flex } from 'theme/functions';

const ActionsToolboxWrapper: FC<{ customActionsContent?: JSX.Element | null }> = ({
  children,
  customActionsContent,
}) => {
  return (
    <div css={flex}>
      {children}
      {customActionsContent && customActionsContent}
    </div>
  );
};

export default ActionsToolboxWrapper;
