import { FormModal } from "~components/features/forms";
import { InputGroup } from "~components/ui";
import { useHook } from "./hooks";
import type { ContributeToGoalFormProps } from "./types";

export const ContributeToGoalForm = ({ id, name }: ContributeToGoalFormProps) => {
    const { handleFormSubmit, reset, register, errors } = useHook({ id });

    return (
        <FormModal
            triggerButton={{
                icon: "Plus",
                label: "Contribution",
                isTriggerVariant: true
            }}
            form={{
                title: `Add Contribution to "${name}"`,
                submitLabel: "Add Contribution",
                onSubmit: handleFormSubmit,
                onReset: () => reset()
            }}
        >
            <InputGroup
                id="amount"
                label="Amount ($)"
                type="number"
                placeholder="50"
                error={errors.amount?.message}
                {...register("amount")}
            />
        </FormModal>
    );
};
