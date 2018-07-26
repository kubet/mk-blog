import React from 'react'
import Link from 'gatsby-link'

import './style.scss'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav class="navbar navbar-expand-lg lex-column flex-md-row navbar-light bg-light">
                <Link className="" to="/">
            <h1 className="navbar-brand mt-1"id="logo">MANUFAKTURA <span id="crvena">KODA</span></h1>
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="container d-flex pr-7" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
    <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
      <Link to="/" className="nav-link">
                  HOME <span class="sr-only">(current)</span>
                </Link>
      </li>
      <li
                className={
                  location.pathname === '/onama/'
                    ? 'nav-item'
                    : 'nav-item'
                }
              >
        <Link to="/onama" className="nav-link">
                  O NAMA
                </Link>
      </li>
      <li
                className={
                  location.pathname === '/kontakt/'
                    ? 'nav-item'
                    : 'nav-item'
                }
              >
      <Link to="/kontakt" className="nav-link">
                  KONTAKT
                </Link>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}

export default SiteNavi
