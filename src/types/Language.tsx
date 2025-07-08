import {Translations} from "../services/TransaltionService";

export type Language = 'en_us' | 'zh_cn';

export interface TranslationsMap {
    [key: string]: string;
}

export const translations: Record<Language, TranslationsMap> = Translations.reduce(
    (acc, t) => ({
        ...acc,
        en_us: { ...acc.en_us, [t.en_us]: t.en_us },
        zh_cn: { ...acc.zh_cn, [t.en_us]: t.zh_cn }
    }),
    { en_us: {}, zh_cn: {} } as Record<Language, TranslationsMap>
);
