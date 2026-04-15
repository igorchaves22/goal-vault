import type { ReactNode } from "react";

export type Child = ReactNode;
export type ElementRef = HTMLElement | null;

export interface Children {
    children: Child;
}
