import React, { FC, useState } from 'react';
import { IconButton } from '../../../../index';
import { MatchingAction } from '../../types';

import Styles from './Toolbox.style';
import { createActionButton } from '../utils';
import { generateUniqueID } from '../../../../utils/helpers';
import ClickAwayListener from '../../../utils/ClickAwayListener';

interface Props {
  matchingActions: MatchingAction[];
}

const SecondaryActions: FC<Props> = ({ matchingActions }) => {
  const [open, setOpen] = useState(false);
  const secondaryUtils = matchingActions.slice(2, matchingActions.length);

  const listItems = secondaryUtils
    .map(createActionButton('secondary'))
    .map(actionButton => <li key={generateUniqueID()}>{actionButton}</li>);

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <div css={Styles.secondaryActionsWrapper}>
        <div css={Styles.buttonWrapper}>
          <IconButton name={'dotsVertical'} filled={false} onClick={() => setOpen(!open)} />
        </div>
        {open && <ul css={Styles.list}>{listItems}</ul>}
      </div>
    </ClickAwayListener>
  );
};

export default SecondaryActions;
