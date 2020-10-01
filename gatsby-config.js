/* eslint-disable no-undef */

module.exports = {
  siteMetadata: {
    title: `Sungik Choi`,
    description: `Sungik Choi's Devlog`,
    author: `Sungik Choi`,
    githubLink: `https://www.github.com/sungik-choi`,
    utterances: {
      repo: 'sungik-choi/blog-comment',
    },
    postTitle: '전체 포스트',
    menuLinks: [
      {
        link: '/',
        name: '홈',
      },
      {
        link: '/about/',
        name: '소개',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-alias-imports`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              // theme: 'Github Light Theme',
              // extensions: ['vscode-theme-github-light'],
              theme: 'Dark Github',
              extensions: ['dark-theme-github'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
``;
