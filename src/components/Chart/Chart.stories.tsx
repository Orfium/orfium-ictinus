import LineChart from './LineChart';
import BarChartShowCase from '../storyUtils/BarChartShowCase';
import DonutChartShowCase from '../storyUtils/DonutChartShowCase';
import { color } from './LineChart/story.utils';
import { initData } from './LineChart/mockedData';

export default {
  title: 'Original Components/Chart',

  argTypes: {
    labelX: { type: 'string' },
    labelY: { type: 'string' },
    isLegendVisible: { type: 'boolean' },
    value: { type: 'string' },
    units: { type: 'string' },
  },

  args: {
    value: 'value',
    units: 'units',
    labelX: 'Dates',
    labelY: 'Values',
    isLegendVisible: true,
  },
};

export const LineChartStory = {
  render: (args) => {
    const { labelX, labelY, isLegendVisible } = args;
    return (
      <LineChart
        data={initData}
        labelX={labelX}
        labelY={labelY}
        isLegendVisible={isLegendVisible}
        color={color}
      />
    );
  },

  name: 'LineChart',

  parameters: {
    controls: { include: ['labelX', 'labelY', 'isLegendVisible'] },
  },
};

export const BarChart = {
  render: () => <BarChartShowCase />,
  name: 'BarChart',

  parameters: {
    controls: { disable: true },
  },
};

export const DonutChart = {
  render: (args) => {
    const { value, units } = args;

    return <DonutChartShowCase chartValue={value} chartUnits={units} />;
  },

  name: 'DonutChart',

  parameters: {
    controls: { include: ['value', 'units'] },
  },
};
