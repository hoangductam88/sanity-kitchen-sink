export default {
  widgets: [
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
                  buildHookId: '5ee970778caa6218e4e2fe19',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1gi6zs3i',
                  apiId: '8274d609-c111-42d7-8ce9-973df97372ac'
                },
                {
                  buildHookId: '5ee970778caa62123ee2fb08',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9bgsmxmo',
                  apiId: 'a345d2ba-897b-40ae-84b8-348cc276902a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hoangductam88/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9bgsmxmo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
