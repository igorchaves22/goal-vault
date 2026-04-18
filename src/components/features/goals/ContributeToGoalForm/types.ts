import type { Goal } from "~types";

export interface UseHookProps extends Pick<Goal, "id"> {}
export interface ContributeToGoalFormProps extends UseHookProps, Pick<Goal, "name"> {}
