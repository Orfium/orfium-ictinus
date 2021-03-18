import React, { FC } from 'react';
import { AcceptedIconNames } from '../../../Icon/types';
import Button from '../../../Button';
import Icon from '../../../Icon';
import Styles from './Toolbox.style';

type Util = { text: string; icon: AcceptedIconNames; onClick?: () => void };
interface Props {
  utils: Util[];
}

const Toolbox: FC<Props> = ({ utils = [] }) => {
  const hasUtils = (array: Util[]) => array.length > 0;
  const primaryUtils = utils.slice(0, 2);
  // const secondaryUtils = utils.slice(2, utils.length);

  return (
    <div>
      <div css={Styles.primaryButtonsWrapper}>
        {hasUtils(primaryUtils) &&
          primaryUtils.map((util, index) => (
            <div key={`primary-util-${index}`} css={Styles.buttonWrapper}>
              <Button
                type={'primary'}
                iconLeft={<Icon color={'inherit'} name={util.icon} />}
                filled={false}
                onClick={util?.onClick}
              >
                {util.text}
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Toolbox;
