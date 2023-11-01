import ThemeProvider from './ThemeProvider';
import Button from '../Button';
import Test from './Test';

export default {
  title: 'Design System/ThemeProvider',
  component: ThemeProvider,
};

export const SettingUpAButtonExample = {
  render: () => (
    <ThemeProvider
      theme={{
        palette: {
          primary: '#2D2D46',
        },
      }}
    >
      <Button>Hello world</Button>
    </ThemeProvider>
  ),

  name: 'Setting up a button example',
};
