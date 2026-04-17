export type Category = "travel" | "education" | "emergency" | "health" | "other";

export interface Goal {
    id: number;
    name: string;
    category: "travel" | "education" | "emergency" | "health" | "other";
    budget: {
        targetAmount: number;
        currentAmount: number;
        progressPercent: number;
        remaining: number;
    };
    dates: {
        deadline: string;
        createdAt: string;
    };
}
export interface Stats {
    totalGoals: number;
    totalSaved: number;
    goalsDone: number;
}
export interface GoalsState {
    hasData: boolean;
    data: {
        goals: Goal[];
        stats: Stats;
    };
}
