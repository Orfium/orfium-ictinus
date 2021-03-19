import React, { FC, useState } from 'react';
import { IconButton } from '../../../../index';
import { MatchingAction } from '../../types';

import Styles from './Toolbox.style';
import { useMatchingActions } from '../utils';
import { generateUniqueID } from '../../../../utils/helpers';
import ClickAwayListener from '../../../utils/ClickAwayListener';

interface Props {
  matchingActions: MatchingAction[];
}

const SecondaryActions: FC<Props> = ({ matchingActions }) => {
  const [open, setOpen] = useState(false);
  const secondaryActions = matchingActions.slice(2, matchingActions.length);
  const hasUniqueAction = secondaryActions.length === 1;
  const hasNoAction = secondaryActions.length === 0;

  const { actionItems } = useMatchingActions(secondaryActions, actionButton => (
    <li key={generateUniqueID()}>{actionButton}</li>
  ));

  if (hasNoAction) {
    return null;
  }

  if (hasUniqueAction) {
    const uniqueAction = secondaryActions[0];

    return (
      <div css={Styles.buttonWrapper}>
        <IconButton
          color={'neutralBlack-700'}
          name={uniqueAction.icon}
          filled={false}
          onClick={uniqueAction?.onClick}
        />
      </div>
    );
  }

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <div css={Styles.secondaryActionsWrapper}>
        <div css={Styles.buttonWrapper}>
          <IconButton
            color={'neutralBlack-700'}
            name={'dotsVertical'}
            filled={false}
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && <ul css={Styles.list}>{actionItems}</ul>}
      </div>
    </ClickAwayListener>
  );
};

export default SecondaryActions;
