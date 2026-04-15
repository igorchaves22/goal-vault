import { ICONS } from "~constants";
import * as S from "./styles";
import type { IconProps } from "./types";

export const Icon = ({ icon, ...rest }: IconProps) => {
    const Element = ICONS[icon];

    return (
        <S.StyledElement
            as={Element}
            {...rest}
        />
    );
};
