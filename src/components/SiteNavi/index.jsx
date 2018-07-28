import React from 'react'
import Link from 'gatsby-link'

import './style.scss'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav class="navbar navbar-expand-lg lex-column flex-md-row navbar-light bg-light">
                <div className="nlogo">
                <Link className="" to="/">
            <h1 className="navbar-brand mt-1"id="desktop">MANUFAKTURA <span id="crvena">KODA</span></h1>
            <h1 className="navbar-brand"id="mobile">M<span id="crvena">K</span></h1>
          </Link>
          </div>
          <input type="checkbox" id="nav" class="hidden" />
                      <label for="nav" class="nav-btn">
                            <i></i>
                            <i></i>
                            <i></i>
                      </label>
  <div class="nav-wrapper">
  <div className="nlogo">
                <Link className="" to="/">
            <h1 className="navbar-brand"id="mobile">M<span id="crvena">K</span></h1>
          </Link>
          </div>
    <ul class="navbar-nav ml-auto pl-7">
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
