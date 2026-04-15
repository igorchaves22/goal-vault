import styled, { css } from "styled-components";
import { applyStylesIfTrue, createStyles } from "~helpers";
import { ComponentFlexBox, ComponentLayoutBox, ComponentViewportBox } from "~styles";
import type { StyledBoxProps } from "./types";

export const StyledBox = styled.div<StyledBoxProps>`
    ${ComponentFlexBox};

    ${({ theme, $isContainer }) =>
        applyStylesIfTrue(
            $isContainer,
            css`
                ${ComponentViewportBox};
                ${ComponentLayoutBox};

                padding-block: ${theme.spacing[6]} ${theme.spacing[12]};
                grid-template-rows: auto;
                align-content: stretch;
            `
        )};
    ${({ $isSubContainer }) =>
        applyStylesIfTrue(
            $isSubContainer,
            css`
                align-self: stretch;
            `
        )};
    ${(props) =>
        createStyles({
            $height: "auto",
            ...props
        })};
`;
