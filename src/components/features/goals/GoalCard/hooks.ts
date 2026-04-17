import { formatDateParts } from "~utils";
import type { UseHookProps } from "./types";

export const useHook = ({ dates }: UseHookProps) => {
    const createdAt = formatDateParts(dates.createdAt);
    const deadline = formatDateParts(dates.deadline);

    const formattedCreatedAt = `${createdAt.month} ${createdAt.day}, ${createdAt.year}`;
    const formattedDeadline = `${deadline.month} ${deadline.day}, ${deadline.year}`;

    return { formattedCreatedAt, formattedDeadline };
};
