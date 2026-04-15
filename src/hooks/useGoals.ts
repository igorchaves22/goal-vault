import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, type AppDispatch, type RootState } from "~store";

export const useGoals = () => {
    const state = useSelector((state: RootState) => state.goals);
    const dispatch = useDispatch<AppDispatch>();

    const handleLoadDB = useCallback(() => dispatch(actions.goals.loadDB()), [dispatch]);

    return { state, handleLoadDB };
};
