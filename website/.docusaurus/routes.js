
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','649'),
    routes: [
      {
        path: '/docs/awesome',
        component: ComponentCreator('/docs/awesome','429'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/docs/home',
        component: ComponentCreator('/docs/home','982'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/docs/maturity-matrix/maturity-organization',
        component: ComponentCreator('/docs/maturity-matrix/maturity-organization','f8c'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/docs/maturity-matrix/maturity-project',
        component: ComponentCreator('/docs/maturity-matrix/maturity-project','bc1'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/docs/maturity-matrix/maturity-readme',
        component: ComponentCreator('/docs/maturity-matrix/maturity-readme','f7c'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/docs/open-roles/innersource-sig-co-lead',
        component: ComponentCreator('/docs/open-roles/innersource-sig-co-lead','d0f'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/docs/open-roles/README',
        component: ComponentCreator('/docs/open-roles/README','631'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/docs/roadmap',
        component: ComponentCreator('/docs/roadmap','b90'),
        exact: true,
        'sidebar': "mainSidebar"
      },
      {
        path: '/docs/team',
        component: ComponentCreator('/docs/team','ea4'),
        exact: true,
        'sidebar': "mainSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
