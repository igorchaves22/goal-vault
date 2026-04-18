import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "~assets": resolve(__dirname, "src/assets"),
            "~components": resolve(__dirname, "src/components"),
            "~constants": resolve(__dirname, "src/constants"),
            "~contexts": resolve(__dirname, "src/contexts"),
            "~helpers": resolve(__dirname, "src/helpers"),
            "~hooks": resolve(__dirname, "src/hooks"),
            "~pages": resolve(__dirname, "src/pages"),
            "~router": resolve(__dirname, "src/router"),
            "~schemas": resolve(__dirname, "src/schemas"),
            "~services": resolve(__dirname, "src/services"),
            "~store": resolve(__dirname, "src/store"),
            "~styles": resolve(__dirname, "src/styles"),
            "~types": resolve(__dirname, "src/types"),
            "~utils": resolve(__dirname, "src/utils")
        }
    }
});
