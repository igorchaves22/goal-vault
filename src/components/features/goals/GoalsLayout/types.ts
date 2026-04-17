import type { StylesProps } from "~styles";

export interface StyledBoxProps extends Pick<StylesProps, "$direction" | "$gap"> {}
export interface StyledTextProps extends Pick<StylesProps, "$color" | "$fontWeight" | "$fontSize"> {}
