import styled, { css } from "styled-components";
import { applyStylesIfTrue, createStyles } from "~helpers";
import { ComponentButton, ComponentFlexBox, ComponentText, MixinScrollbar, scaleIn, scaleOut } from "~styles";
import type { StyledBoxProps, StyledButtonProps, StyledTextProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
    ${ComponentButton};

    ${({ theme, $isBorder }) =>
        applyStylesIfTrue(
            $isBorder,
            css`
                border: ${theme.lineSize.sm} solid ${theme.color["neutral-4"]};
            `
        )};
    ${({ theme, $isRadius }) =>
        applyStylesIfTrue(
            $isRadius,
            css`
                border-radius: ${theme.radius.sm};
            `
        )};
    ${({ theme, $isPadding }) =>
        applyStylesIfTrue(
            $isPadding,
            css`
                padding: ${theme.spacing[1]} ${theme.spacing[3]};
            `
        )};
    ${(props) =>
        createStyles({
            $wrap: "nowrap",
            $gap: 1,
            $fontWeight: "semiBold",
            ...props
        })};
`;

export const StyledText = styled.span<StyledTextProps>`
    ${ComponentText};

    ${(props) => createStyles(props)};
`;

export const StyledBox = styled.div<StyledBoxProps>`
    ${ComponentFlexBox};

    ${({ theme, $isForm, $isShow }) =>
        applyStylesIfTrue(
            $isForm,
            css`
                width: ${`min(calc(100% - calc(${theme.spacing[4]} * 2)), 38rem)`};
                min-height: 22rem;
                max-height: 32rem;
                border: ${`${theme.lineSize.sm} solid ${theme.color["neutral-4"]}`};
                border-radius: ${theme.radius.md};
                padding: ${theme.spacing[4]};
                justify-content: start;
                animation-name: ${$isShow ? scaleIn : scaleOut};
                animation-duration: 0.25s;
                animation-timing-function: linear;
                animation-fill-mode: ${$isShow ? "both" : "forwards"};
            `
        )};
    ${({ theme, $isBody }) =>
        applyStylesIfTrue(
            $isBody,
            css`
                ${MixinScrollbar({ $width: 0.3, $bgColor: "transparent" })};

                overflow-y: auto;
                padding: ${theme.spacing[4]};
                justify-content: start;
            `
        )};
    ${({ $isChildren }) =>
        applyStylesIfTrue(
            $isChildren,
            css`
                justify-content: start;
            `
        )};
    ${(props) => createStyles(props)};
`;
