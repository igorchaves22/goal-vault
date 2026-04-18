import { AddGoalForm } from "~components/features/goals";
import { ToggleThemeButton } from "~components/features/theme";
import { useHook } from "./hooks";
import * as S from "./styles";

export const Header = () => {
    const { headerRef } = useHook();

    return (
        <S.StyledBox
            as="header"
            ref={headerRef}
            $isContainer
            $bgColor="neutral-1"
        >
            <S.StyledBox
                $gap={8}
                $isSubContainer
            >
                <S.StyledBox
                    $direction="column"
                    $gap={1}
                >
                    <S.StyledText
                        as="h1"
                        $color="primary"
                        $fontWeight="extraBold"
                        $fontSize="5xl"
                    >
                        Financial Goals
                    </S.StyledText>
                    <S.StyledText>Track your savings and reach your targets</S.StyledText>
                </S.StyledBox>
                <S.StyledBox
                    $width="max-content"
                    $wrap="nowrap"
                >
                    <ToggleThemeButton />
                    <AddGoalForm label="New Goal" />
                </S.StyledBox>
            </S.StyledBox>
        </S.StyledBox>
    );
};
