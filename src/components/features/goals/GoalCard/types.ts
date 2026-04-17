import type { StylesProps } from "~styles";
import type { Goal } from "~types";

export interface StyledBoxProps extends Pick<
    StylesProps,
    "$width" | "$height" | "$wrap" | "$direction" | "$gap" | "$bgColor"
> {
    $isContainer?: boolean;
    $progressBar?: number;
}
export interface StyledTextProps extends Pick<
    StylesProps,
    "$width" | "$bgColor" | "$color" | "$fontWeight" | "$fontSize" | "$textAlign"
> {
    $isCategory?: boolean;
}
export interface UseHookProps extends Pick<Goal, "dates"> {}
export interface GoalCardProps extends Goal {}
