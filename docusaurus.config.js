const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Bahasa Pemrograman Gara',
  url: 'https://kodegara.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/gara.png',
  organizationName: 'kodegara', // Usually your GitHub org/user name.
  projectName: 'kodegara', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Gara',
      logo: {
        alt: 'Gara',
        src: 'img/gara.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'pengantar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: 'https://tadika.kodegara.org/', label: 'Editor', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
