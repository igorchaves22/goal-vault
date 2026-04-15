import styled, { css } from "styled-components";
import { applyStylesIfTrue, createStyles } from "~helpers";
import { ComponentFlexBox, ComponentGridBox, ComponentLayoutBox, ComponentText, MixinLayer } from "~styles";
import type { StyledBoxProps, StyledTextProps } from "./types";

export const StyledBox = styled.div<StyledBoxProps>`
    ${ComponentFlexBox};

    ${({ theme, $isContainer }) =>
        applyStylesIfTrue(
            $isContainer,
            css`
                ${ComponentLayoutBox};

                ${MixinLayer({ $position: "absolute", $zIndex: 10 })};

                border-bottom: ${theme.lineSize.sm} solid ${theme.color["neutral-4"]};
                padding-block: ${theme.spacing[8]};
            `
        )};
    ${({ $isSubContainer }) =>
        applyStylesIfTrue(
            $isSubContainer,
            css`
                ${ComponentGridBox};

                justify-items: start;
            `
        )};
    ${(props) => createStyles(props)};

    @media (width >= ${({ theme }) => theme.layout.breakpoint.sm}) {
        ${({ $isSubContainer }) =>
            applyStylesIfTrue(
                $isSubContainer,
                css`
                    grid-template-columns: 1fr max-content;
                `
            )};
    }
`;

export const StyledText = styled.p<StyledTextProps>`
    ${ComponentText};

    ${(props) =>
        createStyles({
            $color: "secondary",
            $textAlign: "start",
            ...props
        })};
`;
