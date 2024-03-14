import ThemeProvider from './ThemeProvider';
import Button from '../Button';
import Test from './Test';

export default {
  title: 'Original Components/ThemeProvider',
  component: ThemeProvider,

  parameters: { controls: { disable: true } },
};

export const SettingUpAButtonExample = {
  render: () => (
    <ThemeProvider>
      <Button>Hello world</Button>
    </ThemeProvider>
  ),

  name: 'Setting up a button example',
};
