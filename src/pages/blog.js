import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import blogStyles from './blog.module.scss'
import Head from './components/head'

import Layout from './components/layout'
const BlogPage = () => {
    const posts= useStaticQuery(graphql`
    query{
      allContentfulBlogPost ( 
        sort:{
          fields:publishDate,
          order:DESC   
        }
      ){
        edges{
          node{
            title
            publishDate (formatString: "DD MMMM YYYY")
            slug
          }
        }
      }
      
    }
     
        `)
       
    
    return (
        <Layout>
          <Head title="Blog"/>
           
            <h1>Blog</h1>
            
            <ol className={blogStyles.posts}>
                {posts.allContentfulBlogPost.edges.map((edge) =>{
                   return (
                  <li className={blogStyles.post}>
                      <Link to={`/blog/${edge.node.slug}`}>
                      <small>{edge.node.publishDate}</small>
                        <h2>{edge.node.title}</h2>
                      </Link>
                  </li>
                )
                
            })}
               

            </ol>
            
           
            
           
        </Layout>
    )
}

export default BlogPage