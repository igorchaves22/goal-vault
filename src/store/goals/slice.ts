import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { GOALS_INITIAL_STATE, GOALS_SLICE_NAME } from "~constants";
import { generateId } from "~helpers";
import type { Goal, GoalsState } from "~types";
import type { AddGoalPayload, ContributePayload, EditGoalPayload } from "./types";

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
        },
        editGoal: (state, action: PayloadAction<EditGoalPayload>) => {
            const goal = state.data.goals.find((goal) => goal.id === action.payload.id);

            if (!goal) return;

            goal.name = action.payload.name;
            goal.category = action.payload.category;
            goal.budget = {
                ...goal.budget,
                targetAmount: action.payload.targetAmount,
                progressPercent: Math.round((goal.budget.currentAmount / action.payload.targetAmount) * 100),
                remaining: action.payload.targetAmount - goal.budget.currentAmount
            };
            goal.dates.deadline = action.payload.deadline;
        },
        deleteGoal: (state, action: PayloadAction<number>) => {
            state.data.goals = state.data.goals.filter((goal) => goal.id !== action.payload);
            state.data.stats.totalGoals -= 1;

            if (state.data.goals.length === 0) state.hasData = false;
        },
        contributeToGoal: (state, action: PayloadAction<ContributePayload>) => {
            const goal = state.data.goals.find((goal) => goal.id === action.payload.id);

            if (!goal) return;

            const { currentAmount, targetAmount } = goal.budget;
            const newAmount = Math.min(currentAmount + action.payload.amount, targetAmount);

            goal.budget = {
                ...goal.budget,
                currentAmount: newAmount,
                progressPercent: Math.round((newAmount / targetAmount) * 100),
                remaining: targetAmount - newAmount
            };

            state.data.stats.totalSaved += newAmount - currentAmount;

            const wasCompleted = currentAmount >= targetAmount;
            const isNowCompleted = newAmount >= targetAmount;

            if (!wasCompleted && isNowCompleted) state.data.stats.goalsDone += 1;
        }
    }
});
