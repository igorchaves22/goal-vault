import { yupResolver } from "@hookform/resolvers/yup";
import type { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { CATEGORY } from "~constants";
import { useGoals } from "~hooks";
import { goalSchema, type GoalFormData } from "~schemas";

export const useHook = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<GoalFormData>({
        resolver: yupResolver(goalSchema)
    });
    const { handleAddGoal } = useGoals();

    const handleFormSubmit = (event?: BaseSyntheticEvent) =>
        new Promise<void>((resolve, reject) => {
            handleSubmit(async (data) => {
                try {
                    await handleAddGoal(data);
                    reset();
                    resolve();
                } catch (error) {
                    reject(error);
                }
            })(event);
        });
    const options = Object.entries(CATEGORY).map(([value, { label }]) => ({
        value,
        label
    }));

    return { handleFormSubmit, reset, register, errors, options };
};
