import { Link } from "react-router";
import styled from "styled-components";
import { createStyles } from "~helpers";
import { ComponentFlexBox, ComponentLink, ComponentText } from "~styles";
import type { StyledBoxProps, StyledTextProps } from "./types";

export const StyledBox = styled.div<StyledBoxProps>`
    ${ComponentFlexBox};

    ${(props) => createStyles(props)};
`;

export const StyledText = styled.p<StyledTextProps>`
    ${ComponentText};

    ${(props) =>
        createStyles({
            $color: "secondary",
            ...props
        })};
`;

export const StyledLink = styled(Link)`
    ${ComponentLink};

    ${createStyles({ $width: "fit-content", $color: "brand", $fontWeight: "bold", $fontSize: "xl" })};
`;
