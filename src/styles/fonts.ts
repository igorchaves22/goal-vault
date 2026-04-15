import { css } from "styled-components";
import { FONT_FILES } from "~constants";
import { createFontFace } from "~helpers";

export const fonts = css`
    ${Object.entries(FONT_FILES).map(([weight, src]) => createFontFace("Nunito", Number(weight), src))}
`;
