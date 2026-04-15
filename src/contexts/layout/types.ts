import type { RefObject } from "react";
import type { Children, ElementRef } from "~types";

export interface LayoutContextProps {
    headerRef: RefObject<ElementRef>;
}
export interface LayoutContextProviderProps extends Children {}
