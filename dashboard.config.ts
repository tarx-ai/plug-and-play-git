// dashboard.config.ts
export const project = {
  name: "TARX",
  repoUrl: "https://github.com/tarx-ai/plug-and-play-git",
  environments: [
    { label: "Local Dev", href: "http://localhost:3000" },
    { label: "Preview (Vercel)", href: "https://tarx-react-lovable.vercel.app" },
    { label: "Production", href: "https://tarx.app" },
  ],
  links: {
    designSystem: [
      { label: "Design System (app/design-system)", href: "/design-system" },
      { label: "Tokens", href: "/design-system?tab=tokens" },
      { label: "Icons", href: "/design-system?tab=icons" },
    ],
    components: [
      { label: "Component Gallery", href: "/pagelist" },
      { label: "UI Primitives", href: "/features#ui" },
    ],
    rAndD: [
      { label: "Code Gen", href: "/code-generation" },
      { label: "Photo Editing", href: "/photo-editing" },
      { label: "Video Gen", href: "/video-generation" },
      { label: "Audio Gen", href: "/audio-generation" },
    ],
    docs: [
      { label: "README", href: "https://github.com/tarx-ai/plug-and-play-git#readme" },
      { label: "Design Docs", href: "/updates-and-faq" },
    ],
  },
};
