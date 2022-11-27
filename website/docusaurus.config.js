// Docs at https://v2.docusaurus.io/docs/configuration


// Replace 'project-blueprint' with {project name}
const projectName = 'InnerSource SIG'
// Replace 'project-blueprint' with {project name}
const projectSlug = 'innersource-sig'
// Replace 'FINOS' with {name of copyright owner}
const copyrightOwner = 'FINOS'

module.exports = {
  title: `FINOS ${projectName}`,
  tagline: ``, 
  url: 'https://finos.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon-finos.ico',
  projectName: `FINOS ${projectName}`,
  organizationName: 'FINOS',
  customFields: {
    repoUrl: `https://github.com/finos/${projectSlug}`,
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: `FINOS ${projectName}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/finos/finos-white-min.svg',
      },
      items: [
        {to: 'docs/get-involved', label: 'Get Involved', position: 'right'},
        {to: 'docs/resources', label: 'Resources', position: 'right'},
        {to: 'docs/maturity-matrix/intro', label: 'Maturity Matrix', position: 'right'}
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/finos/finos-white-min.svg',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Involved',
              to: 'docs/get-involved',
            },
            {
              label: 'SIG Leadership Team',
              to: 'docs/team',
            },
            {
              label: 'Resources',
              to: 'docs/resources',
            },
            {
              label: 'Maturity Matrix',
              to: 'docs/maturity-matrix/intro',
            }
          ]
        },
        {
          title: 'FINOS',
          items: [
            {
              label: 'FINOS Website',
              to: 'https://regulationinnovation.org/air-events/',
            },
            {
              label: 'Community Handbook',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/80642059/Community+Handbook',
            },
            {
              label: 'Community Governance',
              to: 'https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530783/Community+Governance',
            }
          ]
        },
        {
          title: 'About FINOS',
          items: [
            {
              label: 'FINOS Projects on GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'Engage the FINOS Community',
              to: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            }
          ]
        },
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl:
            'https://github.com/finos/InnerSource/edit/master/website/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};
