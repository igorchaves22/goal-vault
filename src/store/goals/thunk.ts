import { createAsyncThunk } from "@reduxjs/toolkit";
import { GOALS_DB_STORE_NAMES, GOALS_SLICE_NAME } from "~constants";
import { getGoalsFromDB, openGoalsDB } from "~services";
import { goalsSlice } from "./slice";

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
