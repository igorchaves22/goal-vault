import type { StylesProps } from "~styles";

export interface StyledBoxProps extends Pick<StylesProps, "$direction" | "$gap"> {
    $isContainer?: boolean;
    $isSubContainer?: boolean;
    $headerHeight?: number;
}
