import { useGoals } from "~hooks";
import { formatDateParts } from "~utils";
import type { UseHookProps } from "./types";

export const useHook = ({ dates }: UseHookProps) => {
    const { handleDeleteGoal } = useGoals();

    const createdAt = formatDateParts(dates.createdAt);
    const deadline = formatDateParts(dates.deadline);

    const formattedCreatedAt = `${createdAt.month} ${createdAt.day}, ${createdAt.year}`;
    const formattedDeadline = `${deadline.month} ${deadline.day}, ${deadline.year}`;

    return { handleDeleteGoal, formattedCreatedAt, formattedDeadline };
};
