import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { LayoutContextProvider } from "~contexts/layout";
import { ThemeContextProvider } from "~contexts/theme";
import { router } from "~router";
import { GoalsProvider, store } from "~store";

export function App() {
    return (
        <ThemeContextProvider>
            <LayoutContextProvider>
                <Provider store={store}>
                    <GoalsProvider>
                        <RouterProvider router={router} />
                    </GoalsProvider>
                </Provider>
            </LayoutContextProvider>
        </ThemeContextProvider>
    );
}
