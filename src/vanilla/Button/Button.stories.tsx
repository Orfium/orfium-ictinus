import { Box } from '../Box';
import { Button } from './Button';

export default {
  title: 'Vanilla/Button',
  component: Button,
};

export const Default = {
  render: () => (
    <Box data-theme="light">
      <Button>Button</Button>
    </Box>
  ),
};
