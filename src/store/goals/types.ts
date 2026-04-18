import type { Goal } from "~types";

export type AddGoalPayload = Pick<Goal, "name" | "category"> &
    Pick<Goal["budget"], "targetAmount"> &
    Pick<Goal["dates"], "deadline">;
export type EditGoalPayload = Pick<Goal, "id"> & AddGoalPayload;

export interface ContributePayload extends Pick<Goal, "id"> {
    amount: number;
}
