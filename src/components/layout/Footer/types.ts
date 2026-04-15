import type { StylesProps } from "~styles";

export interface StyledBoxProps extends Pick<StylesProps, "$width" | "$bgColor" | "$gap"> {
    $isContainer?: boolean;
    $isSubContainer?: boolean;
    $isList?: boolean;
}
export interface StyledTextProps extends Pick<StylesProps, "$color" | "$fontWeight" | "$fontSize"> {
    $isCopyright?: boolean;
}
