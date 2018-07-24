import React from 'react'
import Link from 'gatsby-link'

import './style.scss'
const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
      const title = 'Kontakt'
function KontaktPage() {
return ( <div class="container">
<img  id="slika" src={pathPrefix + '/img/hbg.png'} alt="bg"/>
<section className="row">
<div className="pt-5 pl-9">
<h2 className="h2">Zasto&nbsp;Bas&nbsp;Mi?</h2>
</div>
<div className="pt-0 pl-8">
<h1 className="h1">Stupite&nbsp;u&nbsp;Kontakt</h1>
</div>
<div className="slike">
<ul className="">
      <li><a href="http://gogle.com"><img  id="fb" src={pathPrefix + '/img/fb.png'} alt="bg"/></a></li>
      <li><a href="http://gogle.com"><img  id="yt" src={pathPrefix + '/img/yt.png'} alt="bg"/></a></li>
      <li><a href="http://gogle.com"><img  id="email" src={pathPrefix + '/img/email.png'} alt="bg"/></a></li>
</ul>
</div>
<div className="img pl-11">
<img  className="" id="kontakt" src={pathPrefix + '/img/kontakt.png'} alt="Kontakt"/>
</div>
</section>
</div>

)}


export default KontaktPage
