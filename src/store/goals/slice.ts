import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { GOALS_INITIAL_STATE, GOALS_SLICE_NAME } from "~constants";
import type { GoalsState } from "~types";

export const goalsSlice = createSlice({
    name: GOALS_SLICE_NAME,
    initialState: GOALS_INITIAL_STATE,
    reducers: {
        loadDB: (state, action: PayloadAction<GoalsState>) => {
            state.hasData = action.payload.hasData;
            state.data = action.payload.data;
        }
    }
});
