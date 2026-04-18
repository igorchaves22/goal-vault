import type { GoalsState } from "~types";

export const GOALS_DB_NAME = "goalvault-db";
export const GOALS_DB_VERSION = 1;
export const GOALS_DB_STORE_NAMES = {
    goals: "goals",
    stats: "stats"
} as const;
export const GOALS_DB_KEYS = {
    goals: "list",
    stats: "data"
} as const;
export const GOALS_SLICE_NAME = "goals";
export const GOALS_INITIAL_STATE: GoalsState = {
    hasData: false,
    data: {
        goals: [],
        stats: {
            totalGoals: 0,
            totalSaved: 0,
            goalsDone: 0
        }
    }
};
export const CATEGORY = {
    travel: {
        icon: "✈️",
        label: "travel"
    },
    education: {
        icon: "📚",
        label: "education"
    },
    emergency: {
        icon: "🚨",
        label: "emergency"
    },
    health: {
        icon: "💚",
        label: "health"
    },
    other: {
        icon: "📌",
        label: "other"
    }
} as const;
