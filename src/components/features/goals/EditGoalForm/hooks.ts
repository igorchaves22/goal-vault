import { yupResolver } from "@hookform/resolvers/yup";
import type { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { CATEGORY } from "~constants";
import { useGoals } from "~hooks";
import { goalSchema, type GoalFormData } from "~schemas";
import type { UseHookProps } from "./types";

export const useHook = (props: UseHookProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<GoalFormData>({
        resolver: yupResolver(goalSchema),
        defaultValues: {
            name: props.name,
            category: props.category,
            targetAmount: props.budget.targetAmount,
            deadline: props.dates.deadline
        }
    });
    const { handleEditGoal } = useGoals();

    const handleFormSubmit = (event?: BaseSyntheticEvent) =>
        new Promise<void>((resolve, reject) => {
            handleSubmit(async (data) => {
                try {
                    await handleEditGoal({
                        id: props.id,
                        ...data
                    });
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
