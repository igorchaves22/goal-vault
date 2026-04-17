import styled from "styled-components";
import { ComponentGridBox } from "~styles";

export const StyledBox = styled.ul`
    ${ComponentGridBox};

    list-style: none;
    padding-inline: ${({ theme }) => theme.spacing[8]};
    grid: auto / repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
    flex-grow: 1;
    align-content: start;
`;
