import type { StylesProps } from "~styles";
import type { Children, Icon, VoidFunction } from "~types";

export interface UseHook<T> {
    onSubmit: (data: T) => Promise<void>;
    onReset: VoidFunction;
}
export interface StyledButtonProps extends Pick<
    StylesProps,
    "$width" | "$grow" | "$basis" | "$wrap" | "$gap" | "$bgColor" | "$color"
> {
    $isPadding?: boolean;
    $isBorder?: boolean;
    $isRadius?: boolean;
}
export interface StyledTextProps extends Pick<StylesProps, "$color" | "$fontWeight" | "$fontSize" | "$textAlign"> {}
export interface StyledBoxProps extends Pick<
    StylesProps,
    "$height" | "$grow" | "$direction" | "$wrap" | "$gap" | "$bgColor"
> {
    $isForm?: boolean;
    $isShow?: boolean;
    $isBody?: boolean;
    $isChildren?: boolean;
}
export interface FormModalProps<T> extends Children {
    triggerButton: {
        label?: string;
        isTriggerVariant?: boolean;
    } & Icon;
    form: {
        title: string;
        submitLabel: string;
    } & UseHook<T>;
}
