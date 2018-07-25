import React from 'react'
import Link from 'gatsby-link'

import './style.scss'
const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
      const title = 'Kontakt'
      const htmlStyle = {
        Overflowy: 'hidden'
      };
function KontaktPage() {
return ( <html style={htmlStyle}>
    <div className="body">
        <img  id="slika" src={pathPrefix + '/img/hbg.png'} alt="bg"/>
        <aside>
        <div className="container pt-6 pl-9">
<span className="span pt-6">Zasto Bas Mi?
</span>
</div>
<div className="container pt-7 pl-11 ">
<h2 className="h2">Stupite u Kontakt</h2>
</div>
<div className="img mt-6">
<img  className="img-fluid pl-12" id="kontakt" src={pathPrefix + '/img/kontakt.png'} alt="Kontakt"/>
</div>
        </aside>
        <aside>
        <div className="slike">
<ul className=" ul container">
      <li className=""><a href="http://gogle.com"><img  id="fb" src={pathPrefix + '/img/fb.png'} alt="bg"/></a></li>
      <li><a href="http://gogle.com"><img  id="yt" src={pathPrefix + '/img/yt.png'} alt="bg"/></a></li>
      <li><a href="http://gogle.com"><img  id="email" src={pathPrefix + '/img/email.png'} alt="bg"/></a></li>
</ul>
</div>
        </aside>
    </div>
    </html>
)}


export default KontaktPage
