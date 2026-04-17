import { Icon } from "~components/ui";
import { useGoals } from "~hooks";
import * as S from "./styles";

export const GoalsStats = () => {
    const {
        state: {
            data: {
                stats: { totalGoals, totalSaved, goalsDone }
            }
        }
    } = useGoals();

    return (
        <S.StyledBox as="section">
            <S.StyledBox
                as="dl"
                $isList
            >
                <S.StyledBox
                    $isCard
                    $bgColor="neutral-1"
                >
                    <S.StyledBox
                        as="dt"
                        $width="max-content"
                        $wrap="nowrap"
                        $gap={1}
                    >
                        <Icon
                            icon="Goal"
                            $color="secondary"
                        />
                        <S.StyledText $fontSize="xs">Goals</S.StyledText>
                    </S.StyledBox>
                    <S.StyledText
                        as="dd"
                        $fontWeight="bold"
                        $fontSize="lg"
                    >
                        {totalGoals}
                    </S.StyledText>
                </S.StyledBox>
                <S.StyledBox
                    $isCard
                    $bgColor="neutral-1"
                >
                    <S.StyledBox
                        as="dt"
                        $width="max-content"
                        $wrap="nowrap"
                        $gap={1}
                    >
                        <Icon
                            icon="TrendingUp"
                            $color="secondary"
                        />
                        <S.StyledText $fontSize="xs">Saved</S.StyledText>
                    </S.StyledBox>
                    <S.StyledText
                        as="dd"
                        $color="brand"
                        $fontWeight="bold"
                        $fontSize="lg"
                    >
                        ${totalSaved}
                    </S.StyledText>
                </S.StyledBox>
                <S.StyledBox
                    $isCard
                    $bgColor="neutral-1"
                >
                    <S.StyledBox
                        as="dt"
                        $width="max-content"
                        $wrap="nowrap"
                        $gap={1}
                    >
                        <Icon
                            icon="CircleCheck"
                            $color="secondary"
                        />
                        <S.StyledText $fontSize="xs">Done</S.StyledText>
                    </S.StyledBox>
                    <S.StyledText
                        as="dd"
                        $color="success"
                        $fontWeight="bold"
                        $fontSize="lg"
                    >
                        {goalsDone}
                    </S.StyledText>
                </S.StyledBox>
            </S.StyledBox>
        </S.StyledBox>
    );
};
