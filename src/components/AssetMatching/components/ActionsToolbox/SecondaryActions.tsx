import React, { FC, useState } from 'react';

import { MatchingAction } from '../../types';
import { useMatchingActions } from '../utils';
import Styles from './ActionsToolbox.style';
import IconButton from 'components/IconButton';
import List from 'components/List';
import ClickAwayListener from 'components/utils/ClickAwayListener';

interface Props {
  secondaryActions: MatchingAction[];
  isButtonFilled?: boolean;
  isButtonTransparent?: boolean;
  secondaryButtonColor?: string;
}

const SecondaryActions: FC<Props> = ({
  secondaryActions,
  isButtonFilled = false,
  isButtonTransparent,
  secondaryButtonColor,
}) => {
  const [open, setOpen] = useState(false);

  const { actions } = useMatchingActions(
    secondaryActions,
    actionButton => actionButton,
    isButtonFilled,
    secondaryButtonColor,
    isButtonTransparent
  );

  // @TODO add icon support on list to implement this
  const newActions = actions.map(({ text, icon }) => text);

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <div css={Styles.secondaryActionsWrapper}>
        <div css={Styles.buttonWrapper}>
          <IconButton
            dataTestId={'menu_btn'}
            color={'lightGrey-650'}
            name={'dotsVertical'}
            filled={false}
            onClick={() => setOpen(!open)}
            transparent
          />
        </div>

        {open && (
          <div css={Styles.list}>
            <List
              dataTestId={'secondary_action'}
              data={newActions}
              rowSize={'small'}
              handleOptionClick={(option: string) => {
                const foundAction = actions.find(({ text }) => text === option);
                if (typeof foundAction !== 'undefined' && foundAction.onClick) {
                  foundAction?.onClick();
                }
                setOpen(false);
              }}
            />
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default SecondaryActions;
