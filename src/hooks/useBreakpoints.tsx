import toPairs from 'lodash/toPairs';
import { useMedia } from 'react-media';

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

const queriesSizes: Record<typeof queriesKeys[number], string> = {
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
  acc[size[0]] = `(min-width: ${size[1]}px)`;

  return acc;
}, {} as Record<typeof queriesKeys[number], string>);

export const useBreakpoints = () => {
  return useMedia<Record<typeof queriesKeys[number], string>>({ queries });
};
