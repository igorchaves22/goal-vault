import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, type AddGoalPayload, type AppDispatch, type EditGoalPayload, type RootState } from "~store";

export const useGoals = () => {
    const state = useSelector((state: RootState) => state.goals);
    const dispatch = useDispatch<AppDispatch>();

    const handleLoadDB = useCallback(() => dispatch(actions.goals.loadDB()), [dispatch]);
    const handleAddGoal = useCallback(
        (payload: AddGoalPayload) => dispatch(actions.goals.addGoal(payload)),
        [dispatch]
    );
    const handleEditGoal = useCallback(
        (payload: EditGoalPayload) => dispatch(actions.goals.editGoal(payload)),
        [dispatch]
    );
    const handleDeleteGoal = useCallback((payload: number) => dispatch(actions.goals.deleteGoal(payload)), [dispatch]);

    return { state, handleLoadDB, handleAddGoal, handleEditGoal, handleDeleteGoal };
};
