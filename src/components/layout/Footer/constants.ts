import githubDarkLogoSvg from "~assets/svg/github-dark-logo.svg";
import githubLightLogoSvg from "~assets/svg/github-light-logo.svg";
import linkedinLogoSvg from "~assets/svg/linkedin-logo.svg";

export const AUTHOR_CREDITS = [
    {
        href: "https://github.com/igorchaves22/goal-vault",
        src: {
            light: githubDarkLogoSvg,
            dark: githubLightLogoSvg
        },
        alt: "GitHub logo",
        label: "Source"
    },
    {
        href: "https://www.linkedin.com/in/igorchaves22/",
        src: linkedinLogoSvg,
        alt: "LinkedIn logo",
        label: "Made by Igor"
    }
] as const;
