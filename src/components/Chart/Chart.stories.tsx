import { withKnobs, boolean, array, select, text } from '@storybook/addon-knobs';
import LineChart from './LineChart';
import BarChartShowCase from '../storyUtils/BarChartShowCase';
import DonutChartShowCase from '../storyUtils/DonutChartShowCase';
import { color } from './LineChart/story.utils';
import { initData } from './LineChart/mockedData';

export default {
  title: 'Design System/Chart',
};

export const LineChartStory = {
  render: () => (
    <LineChart
      data={initData}
      labelX={text('labelX', 'Dates')}
      labelY={text('labelY', 'Values')}
      isLegendVisible={boolean('show legend', true)}
      color={color}
    />
  ),

  name: 'LineChart',

  parameters: {
    decorators: [withKnobs],
  },
};

export const BarChart = {
  render: () => <BarChartShowCase />,
  name: 'BarChart',

  parameters: {
    decorators: [withKnobs],
  },
};

export const DonutChart = {
  render: () => (
    <DonutChartShowCase
      chartValue={text('chartValue', 'value')}
      chartUnits={text('chartUnits', 'units')}
    />
  ),

  name: 'DonutChart',

  parameters: {
    decorators: [withKnobs],
  },
};
