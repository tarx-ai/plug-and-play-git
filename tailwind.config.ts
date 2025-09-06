import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");

const config: Config = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./templates/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "2xl": { max: "1419px" },
            // => @media (max-width: 1419px) { ... }
            xl: { max: "1179px" },
            // => @media (max-width: 1179px) { ... }
            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }
            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }
            sm: { max: "480px" },
            // => @media (max-width: 480px) { ... }
        },
        extend: {
            colors: {
                // Design System Colors
                bg: "var(--color-bg)",
                fg: "var(--color-fg)",
                background: "var(--color-bg)",
                foreground: "var(--color-fg)",
                muted: "var(--color-muted)",
                "ds-primary": {
                    DEFAULT: "var(--color-primary)",
                    hover: "var(--color-primary-hover)",
                },
                border: {
                    DEFAULT: "var(--color-border)",
                    hover: "var(--color-border-hover)",
                },
                input: "var(--color-input)",
                card: "var(--color-card)",
                popover: "var(--color-popover)",
                selection: "var(--color-selection)",
                text: {
                    DEFAULT: "var(--color-text)",
                    muted: "var(--color-text-muted)",
                    subtle: "var(--color-text-subtle)",
                },
                // Additional semantic colors for compatibility
                ring: "var(--color-primary)",
                destructive: "var(--color-destructive)",
                success: "var(--color-success)",
                warning: "var(--color-warning)",
                
                // Legacy Colors (preserved for compatibility)
                primary: {
                    1: "#0084FF",
                    2: "#3FDD78",
                },
                accent: {
                    1: "#D84C10",
                    2: "#3E90F0",
                    3: "#8E55EA",
                    4: "#8C6584",
                    5: "#DDA73F",
                },
                n: {
                    1: "#FEFEFE",
                    2: "#F3F5F7",
                    3: "#E8ECEF",
                    4: "#6C7275",
                    5: "#343839",
                    6: "#232627",
                    7: "#141718",
                },
            },
            borderRadius: {
                none: "0",
                xs: "0.25rem",    // 4px - micro elements
                sm: "0.5rem",     // 8px - buttons, inputs
                DEFAULT: "0.75rem", // 12px - cards, panels
                md: "0.75rem",    // 12px - alias for default
                lg: "1rem",       // 16px - larger cards
                xl: "1.5rem",     // 24px - modals, sections
                "2xl": "2rem",    // 32px - super rounded
                "3xl": "3rem",    // 48px - extreme rounded
                full: "9999px",   // full circular
            },
            boxShadow: {
                sm: "var(--shadow-sm)",
                DEFAULT: "var(--shadow-md)",
                md: "var(--shadow-md)",
                lg: "var(--shadow-lg)",
                xl: "var(--shadow-xl)",
            },
            animation: {
                "fade-in": "fadeIn var(--duration-normal) var(--easing)",
                "slide-up": "slideUp var(--duration-normal) var(--easing)",
                "scale-in": "scaleIn var(--duration-fast) var(--easing)",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(10px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.95)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                loaderDots: {
                    "0%": { opacity: "1" },
                    "50%,100%": { opacity: "0.15" },
                },
            },
            spacing: {
                0.25: "0.0625rem",
                0.75: "0.1875rem",
                4.5: "1.125rem",
                5.5: "1.375rem",
                6.5: "1.75rem",
                13: "3.25rem",
                15: "3.75rem",
                18: "4.5rem",
                22: "5.5rem",
                30: "7.5rem",
                34: "8.5rem",
                38: "9.5rem",
                58: "14.5rem",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            fontFamily: {
                sans: ["var(--font-ibm-plex-sans)"],
                inter: "var(--font-ibm-plex-sans)",
            },
            fontSize: {
                0: ["0px", "0px"],
                xl: ["1.125rem", "2rem"],
                "2xl": ["1.5rem", "2.5rem"],
                "3xl": ["1.75rem", "2.5rem"],
                "4xl": ["2.5rem", "3rem"],
                "5xl": ["3rem", "3.5rem"],
                "6xl": ["4rem", "4.5rem"],
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            borderWidth: {
                3: "0.1875rem",
                6: "0.375rem",
            },
            opacity: {
                15: ".15",
            },
        },
    },
    plugins: [
        require("@headlessui/tailwindcss")({ prefix: "ui" }),
        require("tailwind-scrollbar"),
        iOSHeight,
        plugin(function ({ addBase, addComponents, addUtilities }:any) {
            addBase({
                html: {
                    "@apply text-[1rem]": {},
                },
                body: {
                    "@apply bg-n-7 text-[1rem] leading-6 -tracking-[.01em] text-n-7 antialiased md:bg-n-1 dark:text-n-1 dark:md:bg-n-6":
                        {},
                },
            });
            addComponents({
                ".h1": {
                    "@apply font-sans text-6xl font-bold -tracking-[.025em]":
                        {},
                },
                ".h2": {
                    "@apply font-sans text-5xl font-bold -tracking-[.025em]":
                        {},
                },
                ".h3": {
                    "@apply font-sans text-4xl font-bold -tracking-[.045em]":
                        {},
                },
                ".h4": {
                    "@apply font-sans text-3xl font-bold -tracking-[.02em]":
                        {},
                },
                ".h5": {
                    "@apply font-sans text-2xl font-semibold -tracking-[.03em]":
                        {},
                },
                ".h6": {
                    "@apply font-sans text-xl font-semibold -tracking-[.03em]":
                        {},
                },
                ".body1": {
                    "@apply text-[1.5rem] leading-9 -tracking-[.03em]": {},
                },
                ".body1S": {
                    "@apply text-[1.375rem] leading-7 -tracking-[.02em]": {},
                },
                ".body2": {
                    "@apply text-[1.0625rem] leading-6 -tracking-[.01em]": {},
                },
                ".base1": {
                    "@apply font-sans text-[1rem] leading-6 font-medium -tracking-[.03em]":
                        {},
                },
                ".base2": {
                    "@apply font-sans text-[0.875rem] leading-6 font-medium -tracking-[.02em]":
                        {},
                },
                ".caption1": {
                    "@apply font-sans text-[0.75rem] leading-5 font-medium -tracking-[.03em]":
                        {},
                },
                ".caption2": {
                    "@apply font-sans text-[0.6875rem] leading-4 font-medium -tracking-[.01em]":
                        {},
                },
                ".btn": {
                    "@apply inline-flex items-center justify-center h-12 px-5.5 border-2 rounded-xl base2 font-semibold transition-colors disabled:opacity-20 disabled:pointer-events-none":
                        {},
                },
                ".btn svg": {
                    "@apply fill-inherit first:mr-2 last:ml-2": {},
                },
                ".btn-blue": {
                    "@apply btn bg-primary-1 border-primary-1 text-n-1 fill-n-1 hover:bg-primary-1/90 hover:border-transparent":
                        {},
                },
                ".btn-red": {
                    "@apply btn bg-accent-1 border-accent-1 text-n-1 fill-n-1 hover:bg-accent-1/90 hover:border-transparent":
                        {},
                },
                ".btn-dark": {
                    "@apply btn bg-n-7 border-n-7 text-n-1 fill-n-1 hover:bg-n-5 hover:border-n-5 dark:bg-n-1 dark:border-n-1 dark:text-n-7 dark:fill-n-7 dark:hover:border-transparent dark:hover:text-primary-1 dark:hover:fill-primary-1":
                        {},
                },
                ".btn-white": {
                    "@apply btn bg-n-1 border-transparent shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.15)] text-n-7 fill-n-7 hover:bg-n-2 dark:bg-n-6 dark:border-n-1/10 dark:text-n-1 dark:fill-n-1 dark:hover:bg-n-1/10":
                        {},
                },
                ".btn-stroke-dark": {
                    "@apply btn border-n-5 text-n-1 hover:bg-n-5": {},
                },
                ".btn-stroke-light": {
                    "@apply btn border-n-3 fill-n-7 hover:bg-n-3 hover:text-n-7 dark:border-n-5 dark:hover:bg-n-5 dark:hover:text-n-1 dark:fill-n-1":
                        {},
                },
                ".btn-large": {
                    "@apply h-13": {},
                },
                ".btn-medium": {
                    "@apply h-10": {},
                },
                ".btn-small": {
                    "@apply h-9 px-4 border rounded-md": {},
                },
                ".btn-medium svg, .btn-small svg": {
                    "@apply w-5 h-5": {},
                },
            });
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },
            });
        }),
    ],
};
export default config;
