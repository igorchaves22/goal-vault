import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { GOALS_INITIAL_STATE, GOALS_SLICE_NAME } from "~constants";
import { generateId } from "~helpers";
import type { Goal, GoalsState } from "~types";
import type { AddGoalPayload } from "./types";

export const goalsSlice = createSlice({
    name: GOALS_SLICE_NAME,
    initialState: GOALS_INITIAL_STATE,
    reducers: {
        loadDB: (state, action: PayloadAction<GoalsState>) => {
            state.hasData = action.payload.hasData;
            state.data = action.payload.data;
        },
        addGoal: (state, action: PayloadAction<AddGoalPayload>) => {
            if (!state.hasData) state.hasData = true;

            const newGoal: Goal = {
                id: generateId(state.data.goals.map((goal) => goal.id)),
                name: action.payload.name,
                category: action.payload.category,
                budget: {
                    targetAmount: action.payload.targetAmount,
                    currentAmount: 0,
                    progressPercent: 0,
                    remaining: action.payload.targetAmount
                },
                dates: {
                    deadline: action.payload.deadline,
                    createdAt: new Date().toISOString().split("T")[0]
                }
            };

            state.data.goals.push(newGoal);
            state.data.stats.totalGoals += 1;
        }
    }
});
