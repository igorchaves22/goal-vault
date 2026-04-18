import * as yup from "yup";
import { CATEGORY } from "~constants";
import type { Category } from "~types";

export const goalSchema = yup.object({
    name: yup.string().required("Goal name is required").min(2, "Name must be at least 2 characters"),
    category: yup
        .mixed<Category>()
        .oneOf(
            Object.values(CATEGORY).map(({ label }) => label),
            "Select a valid category"
        )
        .required("Category is required"),
    targetAmount: yup
        .number()
        .typeError("Target amount is required")
        .required("Target amount is required")
        .positive("Amount must be positive"),
    deadline: yup
        .string()
        .required("Deadline is required")
        .test("future-date", "Deadline must be in the future", (value) => {
            if (!value) return false;

            return new Date(value) > new Date();
        })
});

export type GoalFormData = yup.InferType<typeof goalSchema>;
