import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
//import './header.module.scss'
import headerStyles from'./header.module.scss'




    const Header = () => {
        const data = useStaticQuery(graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `)  
    return(
        <header className={headerStyles.header}>
            <div id="logo"> <h1>
                <Link to="/" className={headerStyles.title} >{data.site.siteMetadata.title}</Link></h1></div>
            <nav>
                <ul className={headerStyles.navList}>
                <li><Link  to="/blog" className={headerStyles.navListLi} activeClassName={headerStyles.activeNavList}>Blog</Link></li>
                <li><Link to="/contact" className={headerStyles.navListLi} activeClassName={headerStyles.activeNavList}>Contact</Link></li>
                <li><Link to="/about" className={headerStyles.navListLi} activeClassName={headerStyles.activeNavList}>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header