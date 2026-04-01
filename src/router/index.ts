import { createBrowserRouter } from "react-router";
import { HomePage, NotFoundPage } from "~pages";

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "*",
                Component: NotFoundPage
            }
        ]
    }
]);
