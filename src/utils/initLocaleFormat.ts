import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/en';

(function InitLocaleFormat(usLocale: string, euLocale: string) {
  [localizedFormat, localeData].forEach(dayjs.extend);
  const browserLanguage = navigator?.language === 'en-GB' ? euLocale : usLocale;
  dayjs.locale(browserLanguage);
})('en', 'en-gb');
