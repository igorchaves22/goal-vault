import { Icon } from "~components/ui";
import { CATEGORY } from "~constants";
import { useHook } from "./hooks";
import * as S from "./styles";
import type { GoalCardProps } from "./types";

export const GoalCard = ({ id, name, category, budget, dates }: GoalCardProps) => {
    const { handleDeleteGoal, formattedCreatedAt, formattedDeadline } = useHook({ dates });

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
                <S.StyledBox $wrap="nowrap">
                    <S.StyledText
                        as="h3"
                        $fontWeight="semiBold"
                        $fontSize="base"
                        $textAlign="start"
                    >
                        {name}
                    </S.StyledText>
                    <S.StyledButton
                        type="button"
                        aria-label="Delete goal"
                        onClick={() => handleDeleteGoal(id)}
                    >
                        <Icon
                            icon="Trash"
                            $color="error"
                            $size="sm"
                        />
                    </S.StyledButton>
                </S.StyledBox>
                <S.StyledBox $wrap="nowrap">
                    <S.StyledText
                        as="time"
                        $color="secondary"
                        $fontSize="xs"
                        $textAlign="start"
                    >
                        {formattedCreatedAt}
                    </S.StyledText>
                    <S.StyledBox
                        $isCategory
                        $width="max-content"
                        $wrap="nowrap"
                        $gap={1}
                        $bgColor={category}
                    >
                        <S.StyledText
                            as="i"
                            $fontSize="xs"
                        >
                            {CATEGORY[category].icon}
                        </S.StyledText>
                        <S.StyledText
                            $color="base"
                            $fontWeight="medium"
                            $fontSize="xs"
                        >
                            {category}
                        </S.StyledText>
                    </S.StyledBox>
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
