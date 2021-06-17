import { colorShades, flatColors } from './palette';

export type Overrides = {
  tooltip: {
    background: {
      color: typeof flatColors[number];
      shade: typeof colorShades[number];
    };
  };
};

const overrides: Overrides = {
  tooltip: {
    background: {
      color: 'lightGray',
      shade: 300,
    },
  },
};

export default overrides;
