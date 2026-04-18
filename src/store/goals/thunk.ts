import { createAsyncThunk } from "@reduxjs/toolkit";
import { GOALS_DB_STORE_NAMES, GOALS_SLICE_NAME } from "~constants";
import { getGoalsFromDB, openGoalsDB, setGoalsToDB } from "~services";
import type { RootState } from "../store";
import { goalsSlice } from "./slice";
import type { AddGoalPayload, ContributePayload, EditGoalPayload } from "./types";

export const loadDBThunk = createAsyncThunk(`${GOALS_SLICE_NAME}/loadDB`, async (_, { dispatch }) => {
    const db = await openGoalsDB();
    const [storedGoals, storedStats] = await Promise.all([
        getGoalsFromDB(db, GOALS_DB_STORE_NAMES.goals),
        getGoalsFromDB(db, GOALS_DB_STORE_NAMES.stats)
    ]);

    if (!storedGoals || !storedStats) return;

    dispatch(
        goalsSlice.actions.loadDB({
            hasData: true,
            data: {
                goals: storedGoals,
                stats: storedStats
            }
        })
    );
});

export const addGoalThunk = createAsyncThunk(
    `${GOALS_SLICE_NAME}/addGoal`,
    async (payload: AddGoalPayload, { dispatch, getState }) => {
        dispatch(goalsSlice.actions.addGoal(payload));

        const state = (getState() as RootState).goals;
        const db = await openGoalsDB();

        await Promise.all([
            setGoalsToDB(db, GOALS_DB_STORE_NAMES.goals, state.data.goals),
            setGoalsToDB(db, GOALS_DB_STORE_NAMES.stats, state.data.stats)
        ]);
    }
);

export const editGoalThunk = createAsyncThunk(
    `${GOALS_SLICE_NAME}/editGoal`,
    async (payload: EditGoalPayload, { dispatch, getState }) => {
        dispatch(goalsSlice.actions.editGoal(payload));

        const state = (getState() as RootState).goals;
        const db = await openGoalsDB();

        await setGoalsToDB(db, GOALS_DB_STORE_NAMES.goals, state.data.goals);
    }
);

export const deleteGoalThunk = createAsyncThunk(
    `${GOALS_SLICE_NAME}/deleteGoal`,
    async (payload: number, { dispatch, getState }) => {
        dispatch(goalsSlice.actions.deleteGoal(payload));

        const state = (getState() as RootState).goals;
        const db = await openGoalsDB();

        await Promise.all([
            setGoalsToDB(db, GOALS_DB_STORE_NAMES.goals, state.data.goals),
            setGoalsToDB(db, GOALS_DB_STORE_NAMES.stats, state.data.stats)
        ]);
    }
);

export const contributeToGoalThunk = createAsyncThunk(
    `${GOALS_SLICE_NAME}/contributeToGoal`,
    async (payload: ContributePayload, { dispatch, getState }) => {
        dispatch(goalsSlice.actions.contributeToGoal(payload));

        const state = (getState() as RootState).goals;
        const db = await openGoalsDB();

        await Promise.all([
            setGoalsToDB(db, GOALS_DB_STORE_NAMES.goals, state.data.goals),
            setGoalsToDB(db, GOALS_DB_STORE_NAMES.stats, state.data.stats)
        ]);
    }
);
