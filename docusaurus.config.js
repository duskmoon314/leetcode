const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "暮月的 Leetcode 记录",
  tagline: "Dinosaurs are cool",
  url: "https://duskmoon314.github.io",
  baseUrl: "/leetcode/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "duskmoon314",
  projectName: "leetcode",
  themeConfig: {
    navbar: {
      title: "暮月的 Leetcode 记录",
      logo: {
        alt: "暮月",
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://github.com/duskmoon314/leetcode",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} duskmoon. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          blogTitle: "Duskmoon's leetcode solution",
          editUrl:
            "https://github.com/duskmoon314/leetcode/edit/master/website/blog/",
          path: "./blog",
          routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
