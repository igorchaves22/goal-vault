import { Outlet } from "react-router";
import * as S from "./styles";

export const Main = () => (
    <S.StyledBox
        as="main"
        $isContainer
    >
        <S.StyledBox
            $isSubContainer
            $direction="column"
            $gap={10}
        >
            <Outlet />
        </S.StyledBox>
    </S.StyledBox>
);
