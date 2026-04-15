import { css } from "styled-components";
import { MixinBox, MixinDisplayFlex, MixinDisplayGrid, MixinFlow, MixinLayer } from "./mixins";

export const ComponentFlexBox = css`
    ${MixinBox({})};
    ${MixinDisplayFlex({})};
    ${MixinFlow({})};
`;

export const ComponentViewportBox = css`
    ${MixinBox({ $height: "auto" })};
    ${MixinFlow({ $gap: 0 })};

    min-height: 100dvh;
`;

export const ComponentLayoutBox = css`
    ${MixinBox({ $bgColor: "base" })};
    ${MixinLayer({})};
    ${MixinDisplayGrid()};
    ${MixinFlow({ $gap: 8 })};

    padding: ${({ theme }) => theme.spacing[4]};
    grid-template-columns: ${({ theme }) => `min(100%, ${theme.layout.max})`};
    grid-auto-rows: min-content;
`;
