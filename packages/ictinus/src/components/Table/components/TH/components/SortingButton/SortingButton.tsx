import React from 'react';

import { badgeContainer } from './SortingButton.style';
import IconButton from 'components/IconButton';

import type { AcceptedIconNames } from '~/components/Icon';
import type { TestProps } from '~/utils/types';

type Props = {
  /** ID of the columns */
  id: string;
  /** Whether the sorting direction is descending or not */
  isDesc: boolean;
  /** Callback for sorting button  */
  onClick: () => void;
  /** Indicates the sorting order */
  badge?: number;
} & TestProps;

const SortingButton: React.FC<Props> = ({ id, isDesc, badge, onClick, dataTestPrefixId }) => {
  const getIcon = (): AcceptedIconNames => {
    if (isDesc === false || isDesc === undefined) return 'arrowUp';

    return 'arrowDown';
  };

  const button = (
    <IconButton
      data-header-role="sorting-button"
      iconName={getIcon()}
      type="tertiary"
      size="compact"
      onClick={onClick}
      dataTestPrefixId={`${dataTestPrefixId}_sort_${id}_${isDesc ? 'desc' : 'asc'}`}
    />
  );

  return badge ? (
    <div css={{ position: 'relative' }} data-header-role="sorting-button">
      <div css={badgeContainer()}>{badge}</div>
      {button}
    </div>
  ) : (
    button
  );
};

export default SortingButton;
