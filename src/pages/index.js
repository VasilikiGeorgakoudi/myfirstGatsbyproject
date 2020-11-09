import React from "react"
import { Link } from 'gatsby' //link is a react component. when we use link to link pages, gatsby preload the pages you might click so the page loads instantly when you click on 
//but if you wanna link an external page <a></a> is completely fine
import Head from './components/head'
import Layout from './components/layout'
const IndexPage = () => {
  return(
    <Layout>
      <Head title="Home" />
      <h1>Hello,</h1>
      <h2>I'm Vicky, a junior web developer living in beautyful Thessaloniki</h2>
      <p>Need a developer? <a href="/contact">Contact me.</a></p> 
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>

  )
  
  
  
  
}
export default IndexPage
