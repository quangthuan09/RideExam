import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import vi from "./resources/vi.json";
import en from "./resources/en.json";
import { useCallback, useMemo } from "react";
// const ns = Object.keys(Object.values(en)[0]);
// export const defaultNS = ns[0];

export const resources = {
  vi: { translation: vi },
  en: { translation: en },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  compatibilityJSON: "v3",
});
export type TKeyword =
  keyof (typeof resources)[keyof typeof resources]["translation"];
export const useAppTranslation = () => {
  const { t: baseFn, ...rest } = useTranslation();
  const t = useCallback(
    (key: TKeyword, params?: object) => baseFn(`${key}`, params || {}) || "",
    [baseFn]
  );
  return useMemo(() => ({ ...rest, t }), [rest, t]);
};

export default i18n;
