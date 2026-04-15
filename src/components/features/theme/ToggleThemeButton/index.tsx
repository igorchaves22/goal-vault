import { useContext } from "react";
import { Icon } from "~components/ui";
import { ThemeContext } from "~contexts/theme";
import { THEME_MODE_ICON } from "./constants";
import * as S from "./styles";

export const ToggleThemeButton = () => {
    const { themeMode, handleThemeMode } = useContext(ThemeContext);

    return (
        <S.StyledButton
            type="button"
            aria-label="Toggle theme mode"
            onClick={() => handleThemeMode()}
        >
            <Icon
                icon={THEME_MODE_ICON[themeMode]}
                strokeWidth={3}
            />
        </S.StyledButton>
    );
};
