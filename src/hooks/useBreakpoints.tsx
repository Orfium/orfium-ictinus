import { useMediaQuery } from 'react-responsive';

export const queriesKeys = [
  'des1920',
  'des1440',
  'des1366',
  'des1200',
  'tab1024',
  'tab970',
  'tab750',
  'mob480',
  'mob320',
] as const;

export const queriesSizes: Record<(typeof queriesKeys)[number], number> = {
  des1920: 1920,
  des1440: 1440,
  des1366: 1366,
  des1200: 1200,
  tab1024: 1024,
  tab970: 970,
  tab750: 750,
  mob480: 480,
  mob320: 320,
};

const useIctinusMediaQuery = (key: (typeof queriesKeys)[number]) =>
  useMediaQuery({ minWidth: queriesSizes[key] });

export const useBreakpoints = () => {
  const breakpoints: Record<(typeof queriesKeys)[number], boolean> = {
    des1920: useIctinusMediaQuery('des1920'),
    des1440: useIctinusMediaQuery('des1440'),
    des1366: useIctinusMediaQuery('des1366'),
    des1200: useIctinusMediaQuery('des1200'),
    tab1024: useIctinusMediaQuery('tab1024'),
    tab970: useIctinusMediaQuery('tab970'),
    tab750: useIctinusMediaQuery('tab750'),
    mob480: useIctinusMediaQuery('mob480'),
    mob320: useIctinusMediaQuery('mob320'),
  };

  return breakpoints;
};

export default useBreakpoints;
