import type { ThemeColorKeys, ThemeSpacingKeys, ThemeTextSizeKeys, ThemeTextWeightKeys } from "~types";

export type MixinBoxProps = Pick<StylesProps, "$width" | "$height" | "$bgColor">;
export type MixinScrollbarProps = Pick<StylesProps, "$width" | "$height" | "$bgColor" | "$color">;
export type MixinLayerProps = Pick<StylesProps, "$position" | "$zIndex">;
export type MixinDisplayFlexProps = Pick<StylesProps, "$grow" | "$shrink" | "$basis" | "$direction" | "$wrap">;
export type MixinFlowProps = Pick<StylesProps, "$gap">;
export type MixinTextProps = Pick<StylesProps, "$color" | "$fontWeight" | "$fontSize" | "$textAlign">;

export interface StylesProps {
    $width?: "max-content" | "100%" | number;
    $height?: "min-content" | "auto" | number;
    $position?: "relative" | "absolute" | "fixed";
    $zIndex?: number;
    $grow?: number;
    $shrink?: number;
    $basis?: "auto" | number;
    $direction?: "row" | "column";
    $wrap?: "wrap" | "nowrap";
    $gap?: ThemeSpacingKeys;
    $bgColor?: ThemeColorKeys;
    $color?: ThemeColorKeys;
    $fontWeight?: ThemeTextWeightKeys;
    $fontSize?: ThemeTextSizeKeys;
    $textAlign?: "start" | "end" | "center" | "justify";
}
