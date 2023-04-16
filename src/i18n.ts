
import 'react-i18next'
import en from '../src/components/i18n/en-us.json'


declare module 'react-i18next' {
    interface CustomTypeOptions  {
        defaultNS: 'common';
        resources: typeof en;
    }

}