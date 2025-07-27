import {Translations} from "../services/TransaltionService";

export type Language = 'en_us' | 'zh_tw';

export interface TranslationsMap {
    [key: string]: string;
}

export const translations: Record<Language, TranslationsMap> = Translations.reduce(
    (acc, t) => ({
        ...acc,
        en_us: { ...acc.en_us, [t.en_us]: t.en_us },
        zh_tw: { ...acc.zh_tw, [t.en_us]: t.zh_tw }
    }),
    { en_us: {}, zh_tw: {}  } as Record<Language, TranslationsMap>
);
