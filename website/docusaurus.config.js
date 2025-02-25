// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Wails",
  tagline: "",
  url: "https://wails.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "wailsapp",
  projectName: "wails",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
      "zh-Hans": {
        label: "简体中文",
        direction: "ltr",
        htmlLang: "zh-Hans",
      },
    },
  },
  plugins: [
    ["docusaurus-plugin-plausible",
      {
        domain: "wails.io",
      },
    ],
    [require.resolve('docusaurus-lunr-search'), 
      {
        languages: ['en', 'zh'] // language codes
      }
    ]
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/wailsapp/wails/edit/master/website",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/wailsapp/wails/edit/master/website/blog",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/carousel.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Wails Logo",
          src: "img/wails-logo-horizontal.svg",
          srcDark: "img/wails-logo-horizontal-dark.svg",
        },
        items: [
          {
            type: "docsVersionDropdown", //version
            position: "left",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [],
          },
          {
            to: "https://github.com/sponsors/leaanthony",
            label: "Sponsor",
            position: "left",
          },
          {
            type: "doc",
            docId: "introduction",
            position: "right",
            label: "Docs",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "right",
          },
          {
            type: 'dropdown',
            label: 'About',
            position: 'right',
            items: [
              {
                to: "/faq",
                label: "FAQ",
              },
              {
                to: '/changelog',
                label: "Changelog",
              },
              {
                to: '/community-guide',
                label: "Community Guide",
              },
              {
                to: '/credits',
                label: "Credits",
              },
              {
                to: '/stats',
                label: "Stats",
              },
            ],
          },
          { type: "localeDropdown", position: "right" },
          {
            href: "https://github.com/wailsapp/wails",
            label: "GitHub",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Wails Logo",
          src: "img/wails-logo-horizontal.svg",
          srcDark: "img/wails-logo-horizontal-dark.svg",
          href: "https://github.com/wailsapp/wails",
          width: 160,
          height: 50,
        },
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/introduction",
              },
              {
                label: "Getting Started",
                to: "/docs/gettingstarted/installation",
              },
              {
                label: "Changelog",
                to: "/changelog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/wailsapp/wails",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/wailsapp",
              },
              {
                label: "Slack",
                href: "https://gophers.slack.com/messages/CJ4P9F7MZ/",
              },
              {
                label: "Slack invite",
                href: "https://invite.slack.golangbridge.org/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Awesome",
                href: "https://github.com/wailsapp/awesome-wails",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lea Anthony. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: "announcement-bar",
        content: "Wails v2 is currently in Beta",
        backgroundColor: "#b00",
        textColor: "#FFF",
        isCloseable: false,
      },
      algolia: {
        appId: "AWTCNFZ4FF",
        apiKey: "a6c0adbe611ee2535f3da5e8fd7b2200",
        indexName: "wails",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
