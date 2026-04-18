import styled from "styled-components";
import { ComponentViewportBox, fadeIn, fadeOut, MixinLayer } from "~styles";
import { DEFAULT_EXIT_DELAY_MILLISECONDS, DURATION_MILLISECONDS } from "./constants";
import type { StyledBoxProps } from "./types";

export const StyledBox = styled.div<StyledBoxProps>`
    ${ComponentViewportBox};

    ${MixinLayer({ $position: "fixed", $zIndex: 30 })};

    background-color: ${({ theme }) => `color-mix(in srgb, ${theme.color.base} 40%, transparent)`};
    animation-name: ${({ $isShow }) => ($isShow ? fadeIn : fadeOut)};
    animation-duration: 0.25s;
    animation-timing-function: linear;
    animation-delay: ${({ $isShow, $exitDelay }) =>
        `${$isShow ? 0 : ($exitDelay ?? DEFAULT_EXIT_DELAY_MILLISECONDS) + DURATION_MILLISECONDS}ms`};
    animation-fill-mode: ${({ $isShow }) => ($isShow ? "both" : "forwards")};
`;
