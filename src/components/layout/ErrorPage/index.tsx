import { Link } from "react-router";
import type { ErrorPageProps } from "./types";

export const ErrorPage = ({ title, description, link }: ErrorPageProps) => (
    <section>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <Link to={link.href}>{link.label}</Link>
    </section>
);
