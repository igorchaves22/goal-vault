import { useCallback, useEffect, useEffectEvent, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DEFAULT_THEME_MODE, TOGGLE_THEME_MAP } from "~constants";
import { getThemeModeFromLocalStorage, setThemeModeToLocalStorage } from "~helpers";
import { COLOR_PALETTE, GlobalStyles, VARIABLES } from "~styles";
import type { Theme, ThemeMode } from "~types";
import { ThemeContext } from "./context";
import type { ThemeContextProviderProps } from "./types";

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(DEFAULT_THEME_MODE);

    const initialize = useEffectEvent(() => {
        const storedThemeMode = getThemeModeFromLocalStorage();

        if (!storedThemeMode) return setThemeModeToLocalStorage(DEFAULT_THEME_MODE);

        setThemeMode(storedThemeMode);
    });
    const handleThemeMode = useCallback(
        (applyMode?: ThemeMode) => {
            const nextThemeMode = applyMode ?? TOGGLE_THEME_MAP[themeMode];

            setThemeMode(nextThemeMode);
            setThemeModeToLocalStorage(nextThemeMode);
        },
        [themeMode]
    );
    const activeTheme: Theme = {
        color: {
            ...COLOR_PALETTE.static,
            ...COLOR_PALETTE.mode[themeMode]
        },
        ...VARIABLES
    };

    useEffect(() => {
        initialize();
    }, []);

    return (
        <ThemeContext.Provider value={{ themeMode, handleThemeMode }}>
            <ThemeProvider theme={activeTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
