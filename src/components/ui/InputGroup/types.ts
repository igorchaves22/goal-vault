import type { UseFormRegisterReturn } from "react-hook-form";
import type { StylesProps } from "~styles";
import type { InputAttributes } from "~types";

export interface StyledTextProps extends Pick<StylesProps, "$color" | "$fontSize"> {
    $isError?: boolean;
}
export interface StyledInputProps {
    $isError?: boolean;
}
export interface InputGroupProps
    extends Pick<InputAttributes, "id" | "type" | "placeholder">, Partial<UseFormRegisterReturn> {
    label: string;
    error?: string;
}
