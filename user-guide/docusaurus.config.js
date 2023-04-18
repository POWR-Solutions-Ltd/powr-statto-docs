// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'POWR Statto',
  tagline: 'Stats are fun!',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  // Set the production url of your site here
  url: 'https://statto.powrsolutions.co.uk',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'powr-solutions-ltd', // Usually your GitHub org/user name.
  projectName: 'statto', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
       
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      disableVersioning: true,
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Statto',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'stickersSidebar',
            position: 'left',
            label: 'Stickers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'liteSidebar',
            position: 'left',
            label: 'LITE',
          },{
            type: 'docSidebar',
            sidebarId: 'proSidebar',
            position: 'left',
            label: 'PRO',
          },
         
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Stickers',
                to: '/docs/stickers/overview',
              },
                {
                  label: 'Statto LITE',
                  to: '/docs/lite/statto-lite-installation',
                },
                {
                    label: 'Statto Pro',
                    to: 'docs/pro/statto-pro-installation',
                  },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/powrsolutions',
              },
              {
                label: 'Linked in',
                href: 'https://www.linkedin.com/company/powr-solutions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/POWR-Solutions-Ltd',
              },
              {
                label: 'POWR Solutions',
                href: 'https://powrsolutions.co.uk',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} POWR Solutions Ltd, Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
