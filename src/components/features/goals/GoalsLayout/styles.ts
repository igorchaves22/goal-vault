import styled from "styled-components";
import { createStyles } from "~helpers";
import { ComponentFlexBox, ComponentText } from "~styles";
import type { StyledBoxProps, StyledTextProps } from "./types";

export const StyledBox = styled.div<StyledBoxProps>`
    ${ComponentFlexBox};

    ${(props) => createStyles(props)};
`;

export const StyledImage = styled.img`
    ${createStyles({ $width: 5, $height: 5, $bgColor: "neutral-3" })};

    object-fit: contain;
    border-radius: ${({ theme }) => theme.radius.full};
    padding: ${({ theme }) => theme.spacing[4]};
`;

export const StyledText = styled.p<StyledTextProps>`
    ${ComponentText};

    ${(props) =>
        createStyles({
            $color: "secondary",
            ...props
        })};
`;
