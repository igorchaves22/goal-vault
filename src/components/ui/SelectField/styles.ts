import styled, { css } from "styled-components";
import { applyStylesIfTrue, createStyles } from "~helpers";
import { ComponentFlexBox, ComponentText, MixinLayer } from "~styles";
import type { StyledBoxProps, StyledTextProps } from "./types";

export const StyledBox = styled.div<StyledBoxProps>`
    ${ComponentFlexBox};

    ${({ $isContainer }) => applyStylesIfTrue($isContainer, createStyles({ $position: "relative" }))};
    ${({ $isSelect }) =>
        applyStylesIfTrue(
            $isSelect,
            css`
                appearance: none;
                border: none;
                border-radius: ${({ theme }) => theme.radius.md};
                padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};
                cursor: pointer;

                &:focus {
                    outline: ${({ theme }) => `${theme.lineSize.base} solid ${theme.color.brand}`};
                }
            `
        )};
    ${({ theme, $isError }) =>
        applyStylesIfTrue(
            $isError,
            css`
                outline: ${`${theme.lineSize.sm} solid ${theme.color.error}`};
            `
        )};
    ${(props) => createStyles(props)};
`;

export const StyledText = styled.span<StyledTextProps>`
    ${ComponentText};

    ${({ theme, $isError }) =>
        applyStylesIfTrue(
            $isError,
            css`
                ${MixinLayer({ $position: "absolute", $zIndex: 2 })};

                top: ${`calc(${theme.spacing[1]} + 100%)`};
            `
        )};
    ${(props) =>
        createStyles({
            $textAlign: "start",
            ...props
        })};
`;
