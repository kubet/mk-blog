import React from 'react'
import Link from 'gatsby-link'

import './style.scss'

const navStyle = {
      top: '50%' ,
};

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="main-nav navbar-fixed-top navbar-expand-lg lex-column flex-md-row navbar-light navbar-fixed-top" role="navigation">
   <input type="checkbox" id="nav" className="hidden" />
   <label for="nav" className="nav-btn">
   <i></i>
   <i></i>
   <i></i>
   </label>
   <div className="nav-wrapper">
      <div className="container-fluid">
         <ul className="nav navbar-nav ">
            <li
            className={
            location.pathname === '/' ? 'nav-item active' : 'nav-item'
            }
            >
            <Link to="/" className="nav-link">
            O Nama
            </Link>
            </li>
            <li
            className={
            location.pathname === '/usluge/'
            ? 'nav-item'
            : 'nav-item'
            }
            >
            <Link to="/usluge" className="nav-link">
            Usluge
            </Link>
            </li>
            <li
            className={
            location.pathname === '/blog/'
            ? 'nav-item'
            : 'nav-item'
            }
            >
            <Link to="/blog/" className="nav-link">
            Blog 
            </Link>
            </li>
            <li
            className={
            location.pathname === '/kontakt/'
            ? 'nav-item'
            : 'nav-item'
            }
            >
            <Link to="/kontakt/" className="nav-link">
            Kontakt
            </Link>
            </li>
         </ul>
      </div>
   </div>
</nav>
    )
  }
}

export default SiteNavi