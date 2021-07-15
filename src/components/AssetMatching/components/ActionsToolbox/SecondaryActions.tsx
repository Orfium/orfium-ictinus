import React, { FC, useState } from 'react';
import { generateUniqueID } from 'utils/helpers';

import { MatchingAction } from '../../types';
import { useMatchingActions } from '../utils';
import Styles from './ActionsToolbox.style';
import IconButton from 'components/IconButton';
import ClickAwayListener from 'components/utils/ClickAwayListener';

interface Props {
  secondaryActions: MatchingAction[];
  isButtonFilled?: boolean;
  secondaryButtonColor?: string;
}

const SecondaryActions: FC<Props> = ({
  secondaryActions,
  isButtonFilled = false,
  secondaryButtonColor,
}) => {
  const [open, setOpen] = useState(false);

  const { actionItems } = useMatchingActions(
    secondaryActions,
    (actionButton, index) => (
      <li data-testid={'secondary_action'} key={`${generateUniqueID('secondary_action')}_${index}`}>
        {actionButton}
      </li>
    ),
    isButtonFilled,
    secondaryButtonColor
  );

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <div css={Styles.secondaryActionsWrapper}>
        <div css={Styles.buttonWrapper}>
          <IconButton
            dataTestId={'menu_btn'}
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
