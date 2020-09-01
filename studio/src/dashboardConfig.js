export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f4ebd3f634673009f9450e9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nxh8d1ot',
                  apiId: 'a1ea122d-d292-4184-869e-d99dd17758fa'
                },
                {
                  buildHookId: '5f4ebd3f387817013020522f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-s3kwh97r',
                  apiId: 'a269b3fd-ab4b-4f91-9a0e-d4d6ba105eb4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matsest/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-s3kwh97r.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
