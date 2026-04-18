import { useEffect } from "react";
import type { UseHookProps } from "./types";

export const useHook = ({ render }: UseHookProps) =>
    useEffect(() => {
        const originalOverflowValue = document.body.style.overflow;

        if (render.delayed) document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflowValue;
        };
    }, [render.delayed]);
