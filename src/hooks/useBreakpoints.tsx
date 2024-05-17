import { toPairs } from 'lodash';
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

export const queriesSizes: Record<(typeof queriesKeys)[number], string> = {
  des1920: '1920',
  des1440: '1440',
  des1366: '1366',
  des1200: '1200',
  tab1024: '1024',
  tab970: '970',
  tab750: '750',
  mob480: '480',
  mob320: '320',
};

const queries = toPairs(queriesSizes).reduce((acc, size) => {
  acc[size[0]] = { minWidth: size[1] };

  return acc;
}, {} as Record<(typeof queriesKeys)[number], string>);

const useBreakpoints = () => {
  return toPairs(queries).reduce((acc, [key, value]) => {
    acc[key] = useMediaQuery({ query: value });

    return acc;
  }, {} as Record<(typeof queriesKeys)[number], boolean>);
};

export default useBreakpoints;
