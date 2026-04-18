import type { Goal } from "~types";

export type AddGoalPayload = Pick<Goal, "name" | "category"> &
    Pick<Goal["budget"], "targetAmount"> &
    Pick<Goal["dates"], "deadline">;
