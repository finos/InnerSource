export default {
  "title": "FINOS InnerSource SIG",
  "tagline": "FINOS InnerSource SIG",
  "url": "https://finos.org",
  "baseUrl": "/",
  "favicon": "img/favicon/favicon-finos.ico",
  "projectName": "FINOS InnerSource SIG",
  "organizationName": "FINOS",
  "customFields": {
    "repoUrl": "https://github.com/finos/innersource-sig"
  },
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Overpass:400,400i,700"
  ],
  "themeConfig": {
    "navbar": {
      "title": "FINOS InnerSource SIG",
      "logo": {
        "alt": "FINOS Logo",
        "src": "img/favicon/favicon-finos.ico"
      },
      "items": [
        {
          "to": "docs/home",
          "label": "Docs",
          "position": "right"
        },
        {
          "to": "docs/roadmap",
          "label": "Roadmap",
          "position": "right"
        },
        {
          "to": "docs/team",
          "label": "Team",
          "position": "right"
        },
        {
          "href": "https://github.com/finos/",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "copyright": "Copyright © 2022 InnerSource SIG - FINOS",
      "logo": {
        "alt": "FINOS Logo",
        "src": "img/favicon/favicon-finos.ico",
        "href": "https://finos.org"
      },
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs/home"
            },
            {
              "label": "Roadmap",
              "to": "docs/roadmap"
            },
            {
              "label": "Team",
              "to": "docs/team"
            },
            {
              "label": "About FINOS",
              "to": "docs/about-finos"
            }
          ]
        },
        {
          "title": "FINOS",
          "items": [
            {
              "label": "FINOS Website",
              "to": "https://regulationinnovation.org/air-events/"
            },
            {
              "label": "Community Handbook",
              "to": "https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/80642059/Community+Handbook"
            },
            {
              "label": "Community Governance",
              "to": "https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530783/Community+Governance"
            }
          ]
        },
        {
          "title": "About FINOS",
          "items": [
            {
              "label": "FINOS Projects on GitHub",
              "to": "https://github.com/finos"
            },
            {
              "label": "Engage the FINOS Community",
              "to": "https://www.finos.org/engage-with-our-community"
            },
            {
              "label": "FINOS News and Events",
              "to": "https://www.finos.org/news-and-events"
            }
          ]
        }
      ],
      "style": "light"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "../docs",
          "editUrl": "https://github.com/finos/open-developer-platform/edit/master/website/",
          "sidebarPath": "/Users/jamesmcleod/Projects/FINOS/InnerSource/website/sidebars.js"
        },
        "theme": {
          "customCss": "/Users/jamesmcleod/Projects/FINOS/InnerSource/website/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};