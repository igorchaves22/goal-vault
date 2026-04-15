import { useContext } from "react";
import { LayoutContext } from "~contexts/layout";

export const useHook = () => {
    const { headerRef } = useContext(LayoutContext);

    return { headerRef };
};
