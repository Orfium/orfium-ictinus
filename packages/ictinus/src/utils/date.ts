import type { Dayjs as DayjsType } from 'dayjs';
import dayjsLib from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/en-gb';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';

const dayjs = dayjsLib;
export type Dayjs = DayjsType;

dayjs.extend(localizedFormat);
dayjs.extend(localeData);

const browserLanguage =
  typeof navigator !== 'undefined' && navigator?.language === 'en-GB' ? 'en-gb' : 'en';

dayjs.locale(browserLanguage);

export default dayjs;
