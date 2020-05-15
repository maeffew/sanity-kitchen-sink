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
                  buildHookId: '5ebe15f1c844c0019b859253',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-p6hjb4w6',
                  apiId: 'ebfa1f46-8f27-4112-99c4-26087e2c0cce'
                },
                {
                  buildHookId: '5ebe15f1ca49740175355644',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qhdob6nc',
                  apiId: '0c76e09f-83ac-4eab-a548-2db2cecb2b57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maeffew/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qhdob6nc.netlify.app', category: 'apps'}
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
