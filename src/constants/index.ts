export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const LANGUAGES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
} as const;

export type Theme = keyof typeof THEMES;
export type Language = keyof typeof LANGUAGES; 