import { css } from "styled-components";
import { createStyles } from "~helpers";
import type {
    MixinBoxProps,
    MixinDisplayFlexProps,
    MixinFlowProps,
    MixinLayerProps,
    MixinScrollbarProps,
    MixinTextProps
} from "./types";

export const MixinBox = (props: MixinBoxProps) =>
    createStyles({
        $width: "100%",
        $height: "min-content",
        ...props
    });

export const MixinScrollbar = (props: MixinScrollbarProps) => css`
    &::-webkit-scrollbar {
        ${createStyles({ $width: props.$width ?? 0.5, $height: props.$height ?? 0.3 })};

        &- {
            &track {
                ${createStyles({ $bgColor: props.$bgColor ?? "base" })};
            }

            &thumb {
                ${createStyles({ $bgColor: props.$color ?? "neutral-5" })};

                border-radius: ${({ theme }) => theme.radius.pill};

                &:hover {
                    background-color: ${({ theme }) =>
                        `color-mix(in srgb, ${theme.color[props.$color ?? "neutral-5"]} 88%, white 12%)`};
                }

                &:active {
                    background-color: ${({ theme }) =>
                        `color-mix(in srgb, ${theme.color[props.$color ?? "neutral-4"]} 95%, black 15%)`};
                }
            }
        }
    }
`;

export const MixinLayer = (props: MixinLayerProps) => css`
    ${createStyles({ $position: props.$position ?? "relative", $zIndex: props.$zIndex ?? 0 })};

    inset: 0;
`;

export const MixinDisplayFlex = (props: MixinDisplayFlexProps) => css`
    ${createStyles({
        $grow: 0,
        $shrink: 1,
        $basis: "auto",
        $direction: "row",
        $wrap: "wrap",
        ...props
    })};

    display: flex;
`;

export const MixinDisplayGrid = () => css`
    display: grid;
    grid: min-content / 100%;
`;

export const MixinFlow = (props: MixinFlowProps) => css`
    ${createStyles({
        $gap: props.$gap ?? 4
    })};

    place-content: center;
    place-items: center;
`;

export const MixinText = (props: MixinTextProps) =>
    createStyles({
        $color: props.$color ?? "primary",
        $fontWeight: props.$fontWeight ?? "regular",
        $fontSize: props.$fontSize ?? "sm",
        $textAlign: props.$textAlign ?? "center"
    });
