export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602e76672dca6afd8d366072',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-studio-h9effyzz',
                  apiId: '3d0c43a8-8194-4822-9eff-83f3fdba1a41'
                },
                {
                  buildHookId: '602e76677d184d686dcc58aa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-web-8myfqnsx',
                  apiId: '4ff0dba9-63c2-4410-8f09-e50b577b1ac5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Spasmochi/sanity-nextjs-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-web-8myfqnsx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
