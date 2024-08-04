import { TranslateOptions } from "i18n-js";
import { TranslationKeys } from ".";
import { i18n } from '../../../../apps/clients/App';

export const translate = (key: TranslationKeys, options?: TranslateOptions) => {
    return i18n.t(key, options)
}