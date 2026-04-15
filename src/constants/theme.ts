import type { ThemeMode } from "~types";

export const THEME_MODE_LOCALSTORAGE_KEY = "goalvault-theme-mode";
export const DEFAULT_THEME_MODE: ThemeMode = "light";
export const TOGGLE_THEME_MAP = {
    light: "dark",
    dark: "light"
} as const;
