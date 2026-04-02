import { RouterProvider } from "react-router";
import { router } from "~router";
import { GlobalStyles } from "~styles";

export function App() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />
        </>
    );
}
