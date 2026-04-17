import { useGoals } from "~hooks";
import { GoalCard } from "../GoalCard";
import * as S from "./styles";

export const GoalsList = () => {
    const {
        state: {
            data: { goals }
        }
    } = useGoals();

    return (
        <S.StyledBox>
            {goals.map((goal) => (
                <GoalCard
                    key={goal.id}
                    {...goal}
                />
            ))}
        </S.StyledBox>
    );
};
