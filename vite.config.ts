import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "~constants": resolve(__dirname, "src/constants"),
            "~pages": resolve(__dirname, "src/pages"),
            "~router": resolve(__dirname, "src/router")
        }
    }
});
