import { Outlet } from "react-router";
import { useHook } from "./hooks";
import * as S from "./styles";

export const Main = () => {
    const { headerHeight } = useHook();

    return (
        <S.StyledBox
            as="main"
            $isContainer
            $headerHeight={headerHeight}
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
};
