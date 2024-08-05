import { TranslateOptions } from "i18n-js";
import { i18n, TranslationKeys } from ".";

export const translate = (key: TranslationKeys, options?: TranslateOptions) => {
    return i18n.t(key, options)
}