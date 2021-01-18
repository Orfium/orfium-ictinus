const incrementFactor = 0.05;

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

export const customTickFormatter = (tick: number, maxDomainValue: number): string => {
  if (tick === 0) {
    return `${tick}`;
  } else if (maxDomainValue > 1000000 || tick === 1000000) {
    return `${tick / 1000000}M`;
  } else if (maxDomainValue > 1000 || tick === 1000) {
    return `${tick / 1000}T`;
  }

  return `${tick}`;
};
