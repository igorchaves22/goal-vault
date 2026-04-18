import styled, { css } from "styled-components";
import { applyStylesIfTrue, createStyles } from "~helpers";
import { ComponentFlexBox, ComponentText, MixinLayer } from "~styles";
import type { StyledInputProps, StyledTextProps } from "./types";

export const StyledBox = styled.div`
    ${ComponentFlexBox};

    ${createStyles({ $position: "relative", $direction: "column", $gap: 2 })};
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
            $fontWeight: "semiBold",
            $textAlign: "start",
            ...props
        })};
`;

export const StyledInput = styled.input<StyledInputProps>`
    ${ComponentText};

    ${({ theme, $isError }) =>
        applyStylesIfTrue(
            $isError,
            css`
                outline: ${`${theme.lineSize.sm} solid ${theme.color.error}`};
            `
        )};
    ${createStyles({ $bgColor: "base", $textAlign: "start" })};

    border: none;
    border-radius: ${({ theme }) => theme.radius.md};
    appearance: none;
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};

    &:focus {
        outline: ${({ theme }) => `${theme.lineSize.base} solid ${theme.color.brand}`};
    }
`;
