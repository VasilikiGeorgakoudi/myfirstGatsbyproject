const path = require('path')




/*module.exports.onCreateNode = ({ node, actions }) => {
    const {createNodeField } = actions
    
    if(node.internal.type === 'MarkdownRemark'){
      const slug = path.basename(node.fileAbsolutePath, '.md')
      createNodeField({
          node,
          name:'slug',
          value: slug
      })
    }
  }*/
  module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions 
    //1. Get paht to template 
    const blogTemplate = path.resolve('./src/templates/blog.js')
    
    
    //2. Get markdown data 
    const res = await graphql(` query{
       
            allContentfulBlogPost   
            {
              edges{
                node{
                  slug
                }
              }
            }
            
          }
           
    `)
     // 3. Create new pages 
     // res.data.alldataremark for markdown posts
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context:{
                slug: edge.node.slug
            }
        })
    })
   

  }