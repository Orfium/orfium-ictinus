import { lighten } from 'polished';

import { Data } from './BarChart';

const incrementFactor = 0.05;
const lightenFactor = 0.2;

type Values = {
  maxDomainValue: number;
  tickCount: number;
};

export const getValues = (max: number | undefined): Values => {
  const maxValue = max ? max : 0;
  const base = maxValue ? Math.pow(10, maxValue?.toString().length) : 0;
  const incrementNumber = incrementFactor * base;
  const maxDomainValue = incrementNumber * (Math.floor(maxValue / incrementNumber) + 1);
  const quot = maxDomainValue / incrementNumber;
  const tickCount = quot % 2 ? maxDomainValue / incrementNumber + 1 : quot / 2 + 1;

  return {
    maxDomainValue,
    tickCount,
  };
};

export const customTickFormatter = (tickValue: number, maxDomainValue: number): string => {
  if (tickValue === 0) {
    return `${tickValue}`;
  } else if (maxDomainValue > 1000000000 || tickValue === 1000000000) {
    /* when tickValue === maxDomainValue === 1000000000  return 1B instead of 10000M*/
    return `${tickValue / 1000000000}B`;
  } else if (maxDomainValue > 1000000 || tickValue === 1000000) {
    /* when tickValue === maxDomainValue === 1000000  return 1M instead of 10000K*/
    return `${tickValue / 1000000}M`;
  } else if (maxDomainValue >= 1000 || tickValue === 1000) {
    /* when tickValue === maxDomainValue === 1000  return 1K instead of 10000*/
    return `${tickValue / 1000}K`;
  }

  return `${tickValue}`;
};

export const getBarColors = (data: Data[], defaultColor: string) =>
  data.map((obj) => {
    if (obj?.options?.color) {
      if (obj?.options?.coloringOption === 'all') {
        return lighten(lightenFactor, obj?.options?.color);
      }

      return obj?.options?.color;
    }

    return defaultColor;
  });

export const getColoringOptions = (data: Data[], operator?: (cur: Data) => string) => {
  return data.reduce((acc, cur, index) => {
    if (cur.options?.coloringOption !== 'all') {
      return acc;
    } else if (operator && operator(cur)) {
      acc[operator(cur)] = cur.options?.color;
    } else {
      acc[index] = cur.options?.color;
    }

    return acc;
  }, {});
};
