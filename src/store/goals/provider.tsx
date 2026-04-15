import { useEffect } from "react";
import { useGoals } from "~hooks";
import type { Children } from "~types";

export const GoalsProvider = ({ children }: Children) => {
    const { handleLoadDB } = useGoals();

    useEffect(() => {
        handleLoadDB();
    }, [handleLoadDB]);

    return children;
};
