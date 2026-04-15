import { RouterProvider } from "react-router";
import { ThemeContextProvider } from "~contexts/theme";
import { router } from "~router";

export function App() {
    return (
        <ThemeContextProvider>
            <RouterProvider router={router} />
        </ThemeContextProvider>
    );
}
