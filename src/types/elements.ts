import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

export type Child = ReactNode;
export type ElementRef = HTMLElement | null;
export type InputAttributes = InputHTMLAttributes<HTMLInputElement>;
export type SelectAttributes = SelectHTMLAttributes<HTMLSelectElement>;

export interface Children {
    children: Child;
}
export interface RenderTransition {
    immediate: boolean;
    delayed: boolean;
}
export interface RenderTransitionControls {
    render: RenderTransition;
    handleRender: (value?: boolean, delay?: number) => void;
    exitDelay?: number;
}
