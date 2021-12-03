// Gatsby has dotenv by default
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

module.exports = {
  flags: { DEV_SSR: process.env.GATSBY_DEV_SSR || false },
  siteMetadata: {
    siteTitle: 'Pixel Point Gatsby Tailwind Starter',
    siteDescription: 'Site Description',
    siteImage: '/images/social-preview.jpg',
    siteLanguage: 'en',
    siteUrl: process.env.GATSBY_DEFAULT_SITE_URL || 'http://localhost:8000',
    authorName: 'Pixel Point',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 85,
          placeholder: 'none',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-svgo',
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: [{ name: 'removeViewBox', active: false }],
                  },
                },
                'prefixIds',
              ],
            },
          },
        ],
        urlSvgOptions: [
          {
            test: /\.svg$/,
            svgoConfig: {
              plugins: [{ name: 'removeViewBox', active: false }],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        schema: {
          timeout: 60000,
        },
        url: process.env.WP_GRAPHQL_URL,
        auth: {
          htaccess: {
            username: process.env.WP_HTACCESS_USERNAME,
            password: process.env.WP_HTACCESS_PASSWORD,
          },
        },
        html: {
          fallbackImageMaxWidth: 1920,
          imageQuality: 85,
        },
        develop: {
          nodeUpdateInterval: process.env.WP_NODE_UPDATE_INTERVAL || 5000,
          hardCacheMediaFiles: process.env.WP_HARD_CACHE_MEDIA === 'true',
          hardCacheData: process.env.WP_HARD_CACHE_DATA === 'true',
        },
      },
    },
    // TODO: Either uncomment this part of the code if the website is being hosted on Netlify or delete it
    // {
    //   resolve: 'gatsby-plugin-netlify',
    //   // TODO: Either uncomment this part of the code if fonts are stored in /static/fonts/ or delete it
    //   // options: {
    //   //   headers: {
    //   //     '/fonts/*': ['Cache-Control: public, max-age: 31536000, immutable'],
    //   //   },
    //   // },
    // },
    'gatsby-alias-imports',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
  ],
};
