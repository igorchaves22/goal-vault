import { yupResolver } from "@hookform/resolvers/yup";
import type { BaseSyntheticEvent } from "react";
import { useForm } from "react-hook-form";
import { useGoals } from "~hooks";
import { contributionSchema, type ContributionFormData } from "~schemas";
import type { UseHookProps } from "./types";

export const useHook = ({ id }: UseHookProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ContributionFormData>({
        resolver: yupResolver(contributionSchema)
    });
    const { handleContributeToGoal } = useGoals();

    const handleFormSubmit = (event?: BaseSyntheticEvent) =>
        new Promise<void>((resolve, reject) => {
            handleSubmit(async (data) => {
                try {
                    await handleContributeToGoal({
                        id,
                        ...data
                    });
                    reset();
                    resolve();
                } catch (error) {
                    reject(error);
                }
            })(event);
        });

    return { handleFormSubmit, reset, register, errors };
};
