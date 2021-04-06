import React, { FC, useState } from 'react';
import IconButton from 'components/IconButton';
import { MatchingAction } from '../../types';
import Styles from './ActionsToolbox.style';
import { useMatchingActions } from '../utils';
import { generateUniqueID } from 'utils/helpers';
import ClickAwayListener from 'components/utils/ClickAwayListener';

interface Props {
  secondaryActions: MatchingAction[];
  isButtonFilled?: boolean;
}

const SecondaryActions: FC<Props> = ({ secondaryActions, isButtonFilled = false }) => {
  const [open, setOpen] = useState(false);
  const hasUniqueAction = secondaryActions.length === 1;

  const { actionItems } = useMatchingActions(
    secondaryActions,
    (actionButton, index) => (
      <li data-testid={'secondary_action'} key={`${generateUniqueID('secondary_action')}_${index}`}>
        {actionButton}
      </li>
    ),
    isButtonFilled
  );

  if (hasUniqueAction) {
    const uniqueAction = secondaryActions[0];

    return (
      <div css={Styles.buttonWrapper}>
        <IconButton
          dataTestId={'unique_secondary_action'}
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
