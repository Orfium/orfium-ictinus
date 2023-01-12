import dayjsLib, { Dayjs as DayjsType } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/en';
/*
 * This file is for making the dayjs tree shakable when enabling "sideEffect": false on the package.json
 * by having a separate file webpack knows how to load it just once
 */
const dayjs = dayjsLib;
export type Dayjs = DayjsType;

(function InitLocaleFormat(usLocale: string, euLocale: string) {
  [localizedFormat, localeData].forEach(dayjs.extend);
  const browserLanguage = navigator?.language === 'en-GB' ? euLocale : usLocale;
  dayjs.locale(browserLanguage);
})('en', 'en-gb');

export default dayjs;
