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
        {to: 'https://kelas.kodegara.org/', label: 'Kelas (IDE)', position: 'left'},
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
          editUrl: 'https://github.com/kodegara/kodegara',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/kodegara/kodegara',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
