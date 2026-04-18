import type { StylesProps } from "~styles";
import type { Goal } from "~types";

export interface StyledBoxProps extends Pick<
    StylesProps,
    "$width" | "$height" | "$wrap" | "$direction" | "$gap" | "$bgColor"
> {
    $isContainer?: boolean;
    $isCategory?: boolean;
    $progressBar?: number;
}
export interface StyledTextProps extends Pick<StylesProps, "$color" | "$fontWeight" | "$fontSize" | "$textAlign"> {}
export interface UseHookProps extends Pick<Goal, "budget" | "dates"> {}
export interface GoalCardProps extends Goal {}
