import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Tyler's Portfolio",
  description: "Tyler's Devloper Portfolio",

  appearance: "dark",
  lastUpdated: true,

  markdown: {
    theme: "material-theme-palenight",
    lineNumbers: true,
  },

  themeConfig: {
    logo: {
      light: "/assets/logo-black.svg",
      dark: "/assets/logo-grey.svg",
    },
    nav: [
      { text: "Guide", link: "/guide" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/TylerB890" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/tyler-blaszak-9349b6126/",
      },
    ],
    outline: "deep",
  },
  head: [
    ["link", { rel: "icon", type: "image/svg", href: "assets/logo-black.svg" }],
  ],
});
