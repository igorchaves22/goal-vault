import { useGoals } from "~hooks";

export const useHook = () => {
    const {
        state: { hasData }
    } = useGoals();

    return { hasData };
};
