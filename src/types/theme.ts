import type { COLOR_PALETTE, VARIABLES } from "~styles";

export type ThemeMode = "light" | "dark";
export type ThemeVariables = typeof VARIABLES;
export type ThemeColorStatic = typeof COLOR_PALETTE.static;
export type ThemeColorLight = typeof COLOR_PALETTE.mode.light;
export type ThemeColorKeys = keyof (ThemeColorStatic & ThemeColorLight);

export interface Theme extends ThemeVariables {
    color: ThemeColorStatic & ThemeColorLight;
}
