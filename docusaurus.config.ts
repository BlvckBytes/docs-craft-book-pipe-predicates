import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CraftBook Pipe-Predicates Docs',
  tagline: 'Documenting usage and features of Pipe-Predicates',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blvckbytes.github.io',
  trailingSlash: false,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs-craft-book-pipe-predicates/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'blvckbytes', // Usually your GitHub org/user name.
  projectName: 'docs-craft-book-pipe-predicates', // Usually your repo name.
  deploymentBranch: 'deployment',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'CraftBook Pipe-Predicates',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/BlvckBytes/docs-craft-book-pipe-predicates',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} BlvckBytes | Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      // NOTE: dracula does not support YAML token-types, :(
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['Java', 'yaml']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
