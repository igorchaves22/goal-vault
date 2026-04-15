import { useRef } from "react";
import { EMPTY_ELEMENT } from "~constants";
import type { ElementRef } from "~types";
import { LayoutContext } from "./context";
import type { LayoutContextProviderProps } from "./types";

export const LayoutContextProvider = ({ children }: LayoutContextProviderProps) => {
    const headerRef = useRef<ElementRef>(EMPTY_ELEMENT);

    return <LayoutContext.Provider value={{ headerRef }}>{children}</LayoutContext.Provider>;
};
