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
  const tickCount = maxDomainValue / incrementNumber + 1;

  return {
    maxDomainValue,
    tickCount,
  };
};
