import type { Children, RenderTransitionControls } from "~types";

export interface UseHookProps extends Pick<RenderTransitionControls, "render"> {}
export interface StyledBoxProps {
    $isShow: boolean;
    $exitDelay?: number;
}
export interface ModalProps extends Children, Omit<RenderTransitionControls, "handleRender"> {
    onClose: () => void;
}
