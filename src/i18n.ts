import 'react-i18next';
import en from '../src/components/I18n/en.json'

declare module 'react-i18next' {
    interface CustomTypeOptions  {
        defaultNS: 'common';
        resources: typeof en;
    }

}