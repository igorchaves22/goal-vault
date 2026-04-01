import { ErrorPage } from "~components/layout";

export const NotFoundPage = () => (
    <ErrorPage
        title="404 - Page Not Found"
        description="Oops! The page you are looking for does not exist."
        link={{
            href: "/",
            label: "Back to Home"
        }}
    />
);
