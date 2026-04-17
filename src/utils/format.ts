import { MONTHS } from "~constants";

export const formatDateParts = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-").map(Number);

    return {
        year,
        month: MONTHS[month - 1],
        day
    };
};
