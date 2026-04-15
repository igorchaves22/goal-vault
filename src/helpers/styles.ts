import { css } from "styled-components";
import type { StylesProps } from "~styles";

export const applyStylesIfTrue = (condition: unknown, styles: ReturnType<typeof css>) => {
    if (!condition) return null;

    return styles;
};

export const createStyles = (props: StylesProps) => {
    const width = applyStylesIfTrue(
        props.$width !== undefined,
        css`
            width: ${typeof props.$width === "number" ? `${props.$width}rem` : props.$width};
        `
    );
    const height = applyStylesIfTrue(
        props.$height !== undefined,
        css`
            height: ${typeof props.$height === "number" ? `${props.$height}rem` : props.$height};
        `
    );
    const position = applyStylesIfTrue(
        props.$position,
        css`
            position: ${props.$position};
        `
    );
    const zIndex = applyStylesIfTrue(
        props.$zIndex !== undefined,
        css`
            z-index: ${props.$zIndex};
        `
    );
    const basisValue = typeof props.$basis === "number" ? `${props.$basis}rem` : (props.$basis ?? "auto");
    const flex = applyStylesIfTrue(
        props.$grow !== undefined ||
            props.$shrink !== undefined ||
            props.$basis !== undefined ||
            props.$direction ||
            props.$wrap,
        css`
            flex: ${props.$grow ?? 0} ${props.$shrink ?? 1} ${basisValue};
        `
    );
    const flexFlow = applyStylesIfTrue(
        props.$direction || props.$wrap,
        css`
            flex-flow: ${props.$direction ?? "row"} ${props.$wrap ?? "wrap"};
        `
    );
    const gap = applyStylesIfTrue(
        props.$gap !== undefined,
        css`
            gap: ${({ theme }) => theme.spacing[props.$gap!]};
        `
    );
    const bgColor = applyStylesIfTrue(
        props.$bgColor,
        css`
            background-color: ${({ theme }) => theme.color[props.$bgColor!]};
        `
    );
    const color = applyStylesIfTrue(
        props.$color,
        css`
            color: ${({ theme }) => theme.color[props.$color!]};
        `
    );
    const font = applyStylesIfTrue(
        props.$fontWeight || props.$fontSize,
        css`
            font: ${({ theme }) =>
                `${theme.text.weight[props.$fontWeight ?? "regular"]} ${theme.text.size[props.$fontSize ?? "sm"]} / normal ${theme.text.family}`};
        `
    );
    const textAlign = applyStylesIfTrue(
        props.$textAlign,
        css`
            text-align: ${props.$textAlign};
        `
    );

    return css`
        ${width};
        ${height};
        ${position};
        ${zIndex};
        ${flex};
        ${flexFlow};
        ${gap};
        ${bgColor};
        ${color};
        ${font};
        ${textAlign};
    `;
};

export const createFontFace = (family: string, weight: number, src: string) => css`
    @font-face {
        font-family: ${family};
        src: url(${src}) format("woff2");
        font-weight: ${weight};
        font-style: normal;
        font-display: swap;
    }
`;
