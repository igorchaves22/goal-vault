import { configureStore } from "@reduxjs/toolkit";
import { goalsSlice } from "./goals/slice";
import { addGoalThunk, loadDBThunk } from "./goals/thunk";

export const store = configureStore({
    reducer: {
        goals: goalsSlice.reducer
    }
});

export const actions = {
    goals: {
        loadDB: loadDBThunk,
        addGoal: addGoalThunk
    }
};

type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
