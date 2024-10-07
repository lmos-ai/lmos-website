// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LMOS',
  tagline: 'Open-source, cloud-native platform for building and running Multi-Agent systems',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.lmos-ai.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lmos-ai', // Usually your GitHub org/user name.
  projectName: 'lmos-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lmos-ai/lmos-website/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/lmos-ai/lmos-website',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/lmos.png',
      navbar: {
        title: 'LMOS',
        logo: {
          alt: 'LMOS',
          src: 'img/lmos.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/about_us', // Link to the markdown page
            label: 'About us',    // Label in the navbar
            position: 'right',        // Position of the link (left or right)
          },
          {
            to: '/contribute', // Link to the markdown page
            label: 'Contribute',    // Label in the navbar
            position: 'right',        // Position of the link (left or right)
          },
          {
            href: 'https://github.com/lmos-ai',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      colorMode: {
        defaultMode: 'dark'
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
              {
                label: 'Architecture',
                to: '/docs/architecture/overview',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting_started',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Deutsche Telekom AG`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    
};

export default config;
