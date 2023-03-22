import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
// @ts-ignore
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en-us.json';
import ptBr from './pt-br.json';
const resources = {
    en,
    ptBr,
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        // @ts-ignore
        resources,
        defaultNS: "common",
        fallbackLng: "ptBr",
    });

