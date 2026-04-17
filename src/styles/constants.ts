export const COLOR_PALETTE = {
    static: {
        transparent: "transparent",
        brand: "#972697",
        success: "#2eb86b",
        error: "#d94444",
        warning: "#d4952a",
        info: "#4a90d9",
        travel: "#368ce2",
        education: "#8c47d1",
        emergency: "#df3a3a",
        health: "#2bab6b",
        other: "#737b8c"
    },
    mode: {
        light: {
            base: "#f4f5f8",
            primary: "#1a2233",
            secondary: "#737d8c",
            accent: "#b366b3",
            surface: "#ffffff",
            "neutral-1": "#ffffff",
            "neutral-2": "#f4f5f8",
            "neutral-3": "#edeff3",
            "neutral-4": "#dcdfe6",
            "neutral-5": "#b0b5bf",
            "neutral-6": "#737d8c",
            "neutral-7": "#4a5060",
            "neutral-8": "#2a3040",
            "neutral-9": "#1a2233"
        },
        dark: {
            base: "#0f1319",
            primary: "#eaedf2",
            secondary: "#8b919e",
            accent: "#a64da6",
            surface: "#1c2433",
            "neutral-1": "#111827",
            "neutral-2": "#1c2433",
            "neutral-3": "#2d3548",
            "neutral-4": "#4a5568",
            "neutral-5": "#6b7585",
            "neutral-6": "#8b919e",
            "neutral-7": "#b0b5bf",
            "neutral-8": "#dcdfe6",
            "neutral-9": "#eaedf2"
        }
    }
};
export const VARIABLES = {
    layout: {
        max: "72rem",
        breakpoint: {
            xs: "30rem",
            sm: "40rem",
            md: "48rem",
            lg: "64rem",
            xl: "80rem",
            "2xl": "96rem"
        }
    },
    spacing: {
        0: 0,
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.5rem",
        10: "3rem",
        11: "3.5rem",
        12: "4rem",
        13: "5rem",
        14: "6rem",
        15: "8rem"
    },
    lineSize: {
        sm: "0.0625rem",
        base: "0.125rem",
        lg: "0.25rem"
    },
    radius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        pill: "9999rem",
        full: "100%"
    },
    text: {
        weight: {
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
            black: 900
        },
        size: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.75rem",
            "4xl": "2rem",
            "5xl": "2.25rem",
            "6xl": "2.5rem",
            "7xl": "3rem"
        },
        family: "'Nunito', sans-serif"
    },
    iconSize: {
        sm: "1rem",
        base: "1.5rem",
        lg: "2rem"
    }
} as const;
