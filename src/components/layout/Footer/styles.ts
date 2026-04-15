import styled, { css } from "styled-components";
import { applyStylesIfTrue, createStyles } from "~helpers";
import { ComponentFlexBox, ComponentLayoutBox, ComponentLink, ComponentText } from "~styles";
import type { StyledBoxProps, StyledTextProps } from "./types";

export const StyledBox = styled.div<StyledBoxProps>`
    ${ComponentFlexBox};

    ${({ theme, $isContainer }) =>
        applyStylesIfTrue(
            $isContainer,
            css`
                ${ComponentLayoutBox};

                border-top: ${theme.lineSize.sm} solid ${theme.color["neutral-4"]};
                padding-block: ${theme.spacing[8]};
            `
        )};
    ${({ $isList }) =>
        applyStylesIfTrue(
            $isList,
            css`
                list-style: none;
            `
        )};
    ${(props) => createStyles(props)};

    @media (width >= ${({ theme }) => theme.layout.breakpoint.sm}) {
        ${({ $isSubContainer }) =>
            applyStylesIfTrue(
                $isSubContainer,
                css`
                    flex-wrap: nowrap;
                `
            )};
        ${({ $isList }) =>
            applyStylesIfTrue(
                $isList,
                css`
                    justify-content: start;
                `
            )};
    }
`;

export const StyledImage = styled.img`
    width: ${({ theme }) => theme.iconSize.sm};
    height: ${({ theme }) => theme.iconSize.sm};

    object-fit: contain;
`;

export const StyledLink = styled.a`
    ${ComponentLink};
`;

export const StyledText = styled.span<StyledTextProps>`
    ${ComponentText};

    ${(props) =>
        createStyles({
            $color: "secondary",
            ...props
        })};

    white-space: nowrap;

    @media (width >= ${({ theme }) => theme.layout.breakpoint.sm}) {
        ${({ $isCopyright }) => applyStylesIfTrue($isCopyright, createStyles({ $textAlign: "end" }))};
    }
`;
