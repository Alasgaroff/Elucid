module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'HOME',
    author: 'ELUCID TEAM',
    description: 'A Gatsby.js V2 Starter based on Landed by HTML5 UP',
    menuLinks: [
      {
        name: 'DEMO',
        link: '/demo',
        // link: '/right-sidebar',
      },
      {
        name: 'LINKS',
        link: '#',
        items: [
          {
            name: 'GitHub',
            link: 'https://github.com/oslabs-beta/Elucid',
          },
          
          {
            name: 'Optional',
            link: '/right-sidebar',
          },
          // {
          //   name: 'Optional',
          //   link: '/left-sidebar',
          // },
          {
            name: 'Articles',
            link: '#',
            items: [
              {
                name: 'Medium',
                link: 'https://medium.com/@weblab_tech/graphql-everything-you-need-to-know-58756ff253d8',
              },
              {
                name: 'article 2',
                link: '#',
              },
              {
                name: 'article 3',
                link: '#',
              },
              {
                name: 'article 4',
                link: '#',
              },
            ],
          },
        ],
      },
      {
        name: 'TEAM',
        link: '/team',
      },
      {
        name: 'Install ELUCID',
        link: 'https://www.npmjs.com/package/package',
        cl: 'button primary',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/Elucid_Logo.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}
