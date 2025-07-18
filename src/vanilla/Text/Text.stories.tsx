import { Box } from '../Box';
import { Text } from './Text';

export default {
  title: 'Vanilla/Text',
  component: Text,
};

export const Default = {
  render: () => (
    <Box data-theme="light" display="flex" flexDirection="column" gap="sm">
      <Text>Body 01</Text>
      <Text variant="label2">Label 02</Text>
    </Box>
  ),
};
