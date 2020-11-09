import { Link } from 'gatsby'
import React from 'react'
import Head from './components/head'
import Layout from './components/layout'

const AboutPage = () => {
    return(
        <Layout>

            <Head title="About"/>  
            <h1>About me </h1>
            <p>I currently learn cool things online.</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
           
        </Layout>
    )
        

    
   
}
export default AboutPage