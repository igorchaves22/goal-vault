import type { Children, ThemeMode } from "~types";

export interface ThemeContextProps {
    themeMode: ThemeMode;
    handleThemeMode: (applyMode?: ThemeMode) => void;
}
export interface ThemeContextProviderProps extends Children {}
