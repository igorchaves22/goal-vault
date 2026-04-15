import { css } from "styled-components";

export const createFontFace = (family: string, weight: number, src: string) => css`
    @font-face {
        font-family: ${family};
        src: url(${src}) format("woff2");
        font-weight: ${weight};
        font-style: normal;
        font-display: swap;
    }
`;
