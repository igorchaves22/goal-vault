import { RouterProvider } from "react-router";
import { LayoutContextProvider } from "~contexts/layout";
import { ThemeContextProvider } from "~contexts/theme";
import { router } from "~router";

export function App() {
    return (
        <ThemeContextProvider>
            <LayoutContextProvider>
                <RouterProvider router={router} />
            </LayoutContextProvider>
        </ThemeContextProvider>
    );
}
