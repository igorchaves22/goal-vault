import { css } from "styled-components";
import { MixinBox, MixinDisplayFlex, MixinDisplayGrid, MixinFlow, MixinLayer, MixinText } from "./mixins";

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

export const ComponentText = css`
    ${MixinBox({})};
    ${MixinText({})};
`;

export const ComponentLink = css`
    ${MixinBox({})};
    ${MixinDisplayFlex({ $wrap: "nowrap" })};
    ${MixinFlow({ $gap: 1 })};
    ${MixinText({})};

    text-decoration: none;
    transition: filter 0.1s ease-out;

    &:hover {
        filter: brightness(0.88);
    }

    &:active {
        filter: brightness(0.85);
    }
`;
