import { FormModal } from "~components/features/forms";
import { InputGroup, SelectField } from "~components/ui";
import { useHook } from "./hooks";
import type { AddGoalFormProps } from "./types";

export const AddGoalForm = ({ label }: AddGoalFormProps) => {
    const { handleFormSubmit, reset, register, errors, options } = useHook();

    return (
        <FormModal
            triggerButton={{
                icon: "Plus",
                label,
                isTriggerVariant: true
            }}
            form={{
                title: "Create New Goal",
                submitLabel: "Create Goal",
                onSubmit: handleFormSubmit,
                onReset: () => reset()
            }}
        >
            <InputGroup
                id="name"
                label="Goal Name"
                type="text"
                placeholder="Trip to Japan"
                error={errors.name?.message}
                {...register("name")}
            />
            <InputGroup
                id="targetAmount"
                label="Target Amount ($)"
                type="number"
                placeholder="500"
                error={errors.targetAmount?.message}
                {...register("targetAmount")}
            />
            <InputGroup
                id="deadline"
                label="Deadline"
                type="date"
                error={errors.deadline?.message}
                {...register("deadline")}
            />
            <SelectField
                id="category"
                label="Category"
                options={options}
                error={errors.category?.message}
                {...register("category")}
            />
        </FormModal>
    );
};
