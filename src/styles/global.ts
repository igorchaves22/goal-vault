import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";
import { MixinScrollbar } from "./mixins";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
    ${reset};
    ${fonts};

    ${MixinScrollbar({})};
`;
