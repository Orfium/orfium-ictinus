import {
  Box,
  Button,
  CloseIcon,
  DetailsIcon,
  Popover,
  PopoverContent,
  Text,
} from '@orfium/ictinus/vanilla';
import { rem, vars } from '@orfium/tokens';
import { useState } from 'react';

export type FriendRecord = {
  firstName: string;
  lastName: string;
  age: number;
  job: string;
  locked?: boolean;
  address?: {
    street?: string;
  };
};

function renderCompareValues(values: string[]) {
  return (
    <Box display="flex" flexWrap="wrap" gap="sm">
      {values.length ? (
        values.map((value) => (
          <Text key={value} typography="body03" color="inverted.primary">
            {value}
          </Text>
        ))
      ) : (
        <Text typography="body03" color="inverted.primary">
          -
        </Text>
      )}
    </Box>
  );
}

export function FriendComparePopoverContent({
  friend,
  compare,
}: {
  friend: FriendRecord;
  compare: FriendRecord;
}) {
  const friendNames = [friend.firstName, friend.lastName];
  const compareNames = [compare.firstName, compare.lastName];
  const divider = (
    <Box
      borderB="1"
      my="sm"
      style={{ gridColumn: '1 / -1', borderColor: vars.color.background.invertedAlt }}
    />
  );
  const field = (label: string, left: string[], right: string[]) => (
    <>
      <Box display="flex" flexDirection="column" gap="sm">
        <Text typography="body03" color="inverted.active">
          {label}
        </Text>
        {renderCompareValues(left)}
      </Box>
      <Box display="flex" flexDirection="column" gap="sm">
        <Text typography="body03" color="inverted.active">
          {label}
        </Text>
        {renderCompareValues(right)}
      </Box>
    </>
  );

  return (
    <Box
      display="grid"
      p="lg"
      bg="inverted"
      borderRadius="3"
      style={{ width: rem(696), gridTemplateColumns: '1fr 1fr' }}
    >
      <Text typography="label02" color="inverted.active" textTransform="uppercase" mb="lg">
        {friend.firstName}
      </Text>
      <Text typography="label02" color="inverted.active" textTransform="uppercase" mb="lg">
        {compare.firstName}
      </Text>

      {field(`Name (${friendNames.length})`, friendNames, compareNames)}
      {divider}
      {field('Age', [String(friend.age)], [String(compare.age)])}
      {divider}
      {field('Job', [friend.job], [compare.job])}
      {divider}
      {field(
        'Address',
        friend.address?.street ? [friend.address.street] : [],
        compare.address?.street ? [compare.address.street] : []
      )}
    </Box>
  );
}

export function FriendDetailsPopover({
  friend,
  compare,
}: {
  friend: FriendRecord;
  compare: FriendRecord;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button variant="tertiary" iconOnly size="compact">
        <DetailsIcon color="secondary" />
      </Button>
      <PopoverContent showArrow bg="inverted" border="0" shadow="5" maxW="full">
        <Box display="flex" flexDirection="column">
          <Box display="flex" justifyContent="flex-end" px="lg" pt="lg" pb="sm">
            <Button variant="tertiary" circle iconOnly onPress={() => setIsOpen(false)}>
              <CloseIcon color="inverted.secondary" />
            </Button>
          </Box>
          <FriendComparePopoverContent friend={friend} compare={compare} />
        </Box>
      </PopoverContent>
    </Popover>
  );
}
