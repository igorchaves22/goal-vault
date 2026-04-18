import type { UseFormRegisterReturn } from "react-hook-form";
import type { StylesProps } from "~styles";
import type { SelectAttributes } from "~types";

export interface StyledBoxProps extends Pick<StylesProps, "$bgColor"> {
    $isContainer?: boolean;
    $isSelect?: boolean;
    $isError?: boolean;
}
export interface StyledTextProps extends Pick<StylesProps, "$color" | "$fontWeight" | "$fontSize"> {
    $isError?: boolean;
}
export interface SelectFieldProps extends Pick<SelectAttributes, "id">, Partial<UseFormRegisterReturn> {
    label: string;
    options: { label: string; value: string }[];
    error?: string;
}
