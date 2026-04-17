import { Icon } from "~components/ui";
import { CATEGORY } from "~constants";
import { useHook } from "./hooks";
import * as S from "./styles";
import type { GoalCardProps } from "./types";

export const GoalCard = ({ name, category, budget, dates }: GoalCardProps) => {
    const { formattedCreatedAt, formattedDeadline } = useHook({ dates });

    return (
        <S.StyledBox
            as="li"
            $isContainer
            $height="auto"
            $bgColor="surface"
        >
            <S.StyledBox
                $direction="column"
                $gap={1}
            >
                <S.StyledText
                    as="h3"
                    $fontWeight="semiBold"
                    $fontSize="base"
                    $textAlign="start"
                >
                    {name}
                </S.StyledText>
                <S.StyledBox $wrap="nowrap">
                    <S.StyledText
                        as="time"
                        $color="secondary"
                        $fontSize="xs"
                        $textAlign="start"
                    >
                        {formattedCreatedAt}
                    </S.StyledText>
                    <S.StyledText
                        $isCategory
                        $width="max-content"
                        $bgColor={category}
                        $color="base"
                        $fontWeight="medium"
                        $fontSize="xs"
                    >
                        {CATEGORY[category]}
                    </S.StyledText>
                </S.StyledBox>
            </S.StyledBox>
            <S.StyledBox
                $direction="column"
                $gap={2}
            >
                <S.StyledBox $wrap="nowrap">
                    <S.StyledText
                        $fontWeight="bold"
                        $textAlign="start"
                    >
                        ${budget.currentAmount}
                    </S.StyledText>
                    <S.StyledText
                        $color="secondary"
                        $fontSize="xs"
                        $textAlign="end"
                    >
                        ${budget.targetAmount}
                    </S.StyledText>
                </S.StyledBox>
                <S.StyledBox $progressBar={budget.progressPercent} />
                <S.StyledBox $wrap="nowrap">
                    <S.StyledText
                        $color="secondary"
                        $fontSize="xs"
                        $textAlign="start"
                    >
                        {budget.progressPercent}% saved
                    </S.StyledText>
                    <S.StyledText
                        $color="secondary"
                        $fontSize="xs"
                        $textAlign="end"
                    >
                        ${budget.remaining} remaining
                    </S.StyledText>
                </S.StyledBox>
            </S.StyledBox>
            <S.StyledBox
                $wrap="nowrap"
                $gap={1}
            >
                <Icon
                    icon="Goal"
                    $color="secondary"
                    $size="sm"
                />
                <S.StyledText
                    as="time"
                    $color="secondary"
                    $fontWeight="medium"
                    $fontSize="xs"
                    $textAlign="start"
                >
                    Due {formattedDeadline}
                </S.StyledText>
            </S.StyledBox>
        </S.StyledBox>
    );
};
