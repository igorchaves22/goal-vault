import type { StylesProps } from "~styles";

export type StyledBoxProps = Pick<StylesProps, "$direction" | "$gap">;
export type StyledTextProps = Pick<StylesProps, "$color" | "$fontWeight" | "$fontSize">;

export interface ErrorPageProps {
    title: string;
    description: string;
    link: {
        href: string;
        label: string;
    };
}
