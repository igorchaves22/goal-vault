import styled, { css } from "styled-components";
import { applyStylesIfTrue, createStyles } from "~helpers";
import { ComponentButton, ComponentFlexBox, ComponentText, MixinDisplayGrid } from "~styles";
import type { StyledBoxProps, StyledTextProps } from "./types";

export const StyledBox = styled.div<StyledBoxProps>`
    ${ComponentFlexBox};

    ${({ theme, $isContainer }) =>
        applyStylesIfTrue(
            $isContainer,
            css`
                ${MixinDisplayGrid};

                border: ${theme.lineSize.sm} solid ${theme.color["neutral-4"]};
                border-radius: ${theme.radius.md};
                padding: ${theme.spacing[4]};
                grid: subgrid / subgrid;
                grid-row: span 3;
                align-self: stretch;
            `
        )};
    ${({ theme, $progressBar }) =>
        applyStylesIfTrue(
            $progressBar !== undefined,
            css`
                height: ${theme.lineSize.lg};
                border-radius: ${theme.radius.pill};
                background: linear-gradient(
                    to right,
                    ${theme.color.brand} ${$progressBar}%,
                    ${theme.color["neutral-4"]} ${$progressBar}%
                );
            `
        )};
    ${({ theme, $isCategory }) =>
        applyStylesIfTrue(
            $isCategory,
            css`
                border-radius: ${theme.radius.pill};
                padding: ${`${theme.spacing[1]} ${theme.spacing[3]}`};
                text-transform: capitalize;
            `
        )};
    ${(props) => createStyles(props)};
`;

export const StyledText = styled.span<StyledTextProps>`
    ${ComponentText};

    ${(props) => createStyles(props)};
`;

export const StyledButton = styled.button`
    ${ComponentButton};
`;
