import { useContext } from "react";
import { ThemeContext } from "~contexts/theme";

export const useHook = () => {
    const { themeMode } = useContext(ThemeContext);

    return { themeMode };
};
