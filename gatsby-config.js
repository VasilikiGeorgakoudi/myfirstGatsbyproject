/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Full-stack Bootcamp',
    author:'Vasiliki Georgakoudi'
  },
  
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve:'gatsby-source-contentful',
        options:{
          spaceId:process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      },
      
      
      'gatsby-plugin-sass',
    { 
      
      // plugin as an object
       resolve: `gatsby-source-filesystem`,
       options: {
          name: `src`,
          //dirname comes from node
          path: `${__dirname}/src/`,
       },
    },
    'gatsby-plugin-sharp',
    {
      resolve:'gatsby-transformer-remark',
      options:{
        plugins:[
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-images',
            options:{
              maxWidth:750,
              linkImagesToOriginal:false
            }
          }

        ]
      }
    }

  ],
}

