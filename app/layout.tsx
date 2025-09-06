import type { Metadata } from "next";
import { Providers } from "./providers";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
    title: "TARX CODE - Local-first AI coding assistant",
    description:
        "Local-first AI coding assistant for VS Code, Cursor, Code-OSS, and Theia IDE. Your free, always-on coding teammate that works at a college-grad level entirely on your machine.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    content="Local-first AI coding assistant for VS Code, Cursor, Code-OSS, and Theia IDE. Your free, always-on coding teammate that works at a college-grad level entirely on your machine."
                    name="TARX CODE - Local-first AI coding assistant"
                />
                <meta content="TARX CODE - Local-first AI coding assistant" property="og:title" />
                <meta
                    content="Local-first AI coding assistant for VS Code, Cursor, Code-OSS, and Theia IDE. Your free, always-on coding teammate that works at a college-grad level entirely on your machine."
                    property="og:description"
                />
                <meta
                    content="/og-image.png"
                    property="og:image"
                />
                <meta
                    property="og:url"
                    content="https://tarx.ai"
                />
                <meta property="og:site_name" content="TARX CODE" />
                <meta
                    content="TARX CODE - Local-first AI coding assistant"
                    property="twitter:title"
                />
                <meta
                    content="Local-first AI coding assistant for VS Code, Cursor, Code-OSS, and Theia IDE. Your free, always-on coding teammate that works at a college-grad level entirely on your machine."
                    property="twitter:description"
                />
                <meta
                    content="/twitter-card.png"
                    property="twitter:image"
                />
                <meta property="og:type" content="website" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta name="twitter:site" content="@tarxai" />
                <meta name="twitter:creator" content="@tarxai" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body
                className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} bg-n-7 font-sans text-[1rem] leading-6 -tracking-[.01em] text-n-7 antialiased md:bg-n-1 dark:text-n-1 dark:md:bg-n-6`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
