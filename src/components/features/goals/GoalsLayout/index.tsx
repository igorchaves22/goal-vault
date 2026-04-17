import bullseyeSvg from "~assets/svg/bullseye.svg";
import { renderElementIfTrue } from "~helpers";
import { GoalsList } from "../GoalsList";
import { GoalsStats } from "../GoalsStats";
import { useHook } from "./hooks";
import * as S from "./styles";
export const GoalsLayout = () => {
    const { hasData } = useHook();

    return renderElementIfTrue(
        hasData,
        <>
            <GoalsStats />
            <GoalsList />
        </>,
        <S.StyledBox
            as="section"
            $direction="column"
            $gap={8}
        >
            <S.StyledBox
                $direction="column"
                $gap={1}
            >
                <S.StyledImage
                    src={bullseyeSvg}
                    alt="Bullseye"
                    loading="eager"
                />
                <S.StyledText
                    as="h1"
                    $color="primary"
                    $fontWeight="extraBold"
                    $fontSize="2xl"
                >
                    No goals yet
                </S.StyledText>
            </S.StyledBox>
            <S.StyledText>
                Create your first financial goal and start tracking your
                <br />
                progress toward it.
            </S.StyledText>
        </S.StyledBox>
    );
};
