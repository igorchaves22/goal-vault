import type { StylesProps } from "~styles";

export interface StyledBoxProps extends Pick<StylesProps, "$width" | "$wrap" | "$gap" | "$bgColor"> {
    $isList?: boolean;
    $isCard?: boolean;
}
export interface StyledTextProps extends Pick<StylesProps, "$color" | "$fontWeight" | "$fontSize"> {}
