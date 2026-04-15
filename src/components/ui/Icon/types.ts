import type { LucideProps } from "lucide-react";
import type { StylesProps } from "~styles";
import type { Icon, ThemeIconSizeKeys } from "~types";

export interface StyledElementProps extends Pick<StylesProps, "$color"> {
    $size?: ThemeIconSizeKeys;
}
export interface IconProps extends Icon, StyledElementProps, Pick<LucideProps, "strokeWidth"> {}
