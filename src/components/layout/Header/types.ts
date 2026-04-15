import type { StylesProps } from "~styles";

export interface StyledBoxProps extends Pick<StylesProps, "$width" | "$direction" | "$wrap" | "$gap" | "$bgColor"> {
    $isContainer?: boolean;
    $isSubContainer?: boolean;
}
export interface StyledTextProps extends Pick<StylesProps, "$color" | "$fontWeight" | "$fontSize"> {}
