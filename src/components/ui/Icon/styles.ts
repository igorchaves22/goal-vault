import styled, { css } from "styled-components";
import { applyStylesIfTrue, createStyles } from "~helpers";
import type { StyledElementProps } from "./types";

export const StyledElement = styled.svg<StyledElementProps>`
    ${({ theme, $size }) =>
        applyStylesIfTrue(
            $size,
            css`
                width: ${theme.iconSize[$size ?? "base"]};
                height: ${theme.iconSize[$size ?? "base"]};
            `
        )};
    ${(props) =>
        createStyles({
            $grow: 0,
            ...props
        })};

    display: block;
`;
