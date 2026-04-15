import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "~contexts/layout";

export const useHook = () => {
    const { headerRef } = useContext(LayoutContext);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const headerElement = headerRef.current;

        if (!headerElement) return;

        const observer = new ResizeObserver(([entry]) => setHeaderHeight(entry.borderBoxSize[0].blockSize));

        observer.observe(headerElement);

        return () => observer.disconnect();
    }, [headerRef]);

    return { headerHeight };
};
