import styled, { css } from "styled-components";
import { applyStylesIfTrue, createStyles } from "~helpers";
import { ComponentFlexBox, ComponentGridBox, ComponentText } from "~styles";
import type { StyledBoxProps, StyledTextProps } from "./types";

export const StyledBox = styled.div<StyledBoxProps>`
    ${ComponentFlexBox};

    ${({ $isList }) =>
        applyStylesIfTrue(
            $isList,
            css`
                ${ComponentGridBox};

                grid: auto / 100%;
            `
        )};
    ${({ theme, $isCard }) =>
        applyStylesIfTrue(
            $isCard,
            css`
                ${ComponentGridBox};

                grid: subgrid / subgrid;
                grid-row: span 2;
                border: ${`${theme.lineSize.sm} solid ${theme.color["neutral-4"]}`};
                border-radius: ${theme.radius.md};
                padding: ${theme.spacing[4]};
            `
        )};
    ${(props) => createStyles(props)};

    @media (width >= ${({ theme }) => theme.layout.breakpoint.md}) {
        ${({ $isList }) =>
            applyStylesIfTrue(
                $isList,
                css`
                    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
                `
            )};
    }
`;

export const StyledText = styled.span<StyledTextProps>`
    ${ComponentText};

    ${(props) =>
        createStyles({
            $fontWeight: "medium",
            ...props
        })};
`;
