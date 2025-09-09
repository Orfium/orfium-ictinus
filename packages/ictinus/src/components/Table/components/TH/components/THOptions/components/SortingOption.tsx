import type { AcceptedIconNames } from 'components/Icon';
import Icon from 'components/Icon';
import { ListItem, ListItemAction, ListItemText } from 'components/List';
import { MenuItemWrapper } from 'components/Menu/Menu.style';
import React from 'react';
import useTheme from '~/hooks/useTheme';
import type { TestProps } from '~/utils/types';

type SortingOptionProps = {
  key?: string | number;
  isDescending?: boolean;
} & TestProps;

const LABELS = {
  SORT_DESCENDING: 'Sort descending (a-z)',
  SORT_ASCENDING: 'Sort ascending (z-a)',
};

const SortingOption: React.FC<SortingOptionProps> = ({ isDescending = false, dataTestId }) => {
  const theme = useTheme();

  const iconName = `sort${isDescending ? 'Descending' : 'Ascending'}` as AcceptedIconNames;

  return (
    <MenuItemWrapper isCompact={true} rowSize="compact" id={iconName} key={iconName}>
      <ListItem
        key={iconName}
        textValue={iconName}
        parentType="Menu"
        css={{ width: '100%' }}
        data-testid={dataTestId}
      >
        <ListItemAction>
          <Icon name={iconName} size={theme.dimension.sizing.get('icon.md')} />
        </ListItemAction>
        <ListItemText>{isDescending ? LABELS.SORT_DESCENDING : LABELS.SORT_ASCENDING}</ListItemText>
      </ListItem>
    </MenuItemWrapper>
  );
};

export default SortingOption;
