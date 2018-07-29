import React from 'react'
import Link from 'gatsby-link'

import './style.scss'
const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
      const title = 'Kontakt'
function KontaktPage() {
return ( <div style={{ backgroundImage: `url(${pathPrefix + '/img/hbg.png'})` }} id="kontakt">
    <div>
    <div className="container-fluid" id="dole">
	<div id="ling">
        <ul class='social list'>
  
  <li className="list-item pl-1 pt-1">
  <a href="http://fb.com"><img  id="fb" src={pathPrefix + '/img/fb.png'} alt="fb"/>
    </a>
  </li>
  <li className="list-item pl-1 pt-1">
  <a href="http://youtube.com"><img  id="yt" src={pathPrefix + '/img/yt.png'} alt="yt"/></a>
  </li>
  <li className="list-item pl-1 pt-1">
  <a href="mailto:manufaktura@koda.com"><img  id="email" src={pathPrefix + '/img/email.png'} alt="email"/></a>
  </li>
  
</ul>
        </div>
        <div className="row">
        <div className="col-md-12">
        <div className="row pt-7">
				<div class="col-md-6">
				</div>
				<div class="col-md-6">
					<h2 id="h2" class="text-right">
						Zasto Bas Mi?
					</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
				</div>
				<div class="col-md-8">
					<h1 id="h1" class="text-right">
						Stupite u kontakt
					</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8">
				</div>
				<div class="col-md-4">
				{/* <img  className="img-fluid pt-2" id="adresa" src={pathPrefix + '/img/kontakt.png'} alt="Kontakt"/> */}
				<ul className="kontakti">
				<li><img  className="imgk pt-2 pl-1 pr-3" id="lokacija" src={pathPrefix + '/img/loc.png'} alt="Lokacija"/>Grape 765a, Belgrade, Serbia</li>
				<li><img  className="imgk pt-2 pl-2 pr-3" id="phone" src={pathPrefix + '/img/phone.png'} alt="Kontakt"/>06123456789</li>
				<li><img  className="imgk pt-2 pr-3 " id="mail" src={pathPrefix + '/img/mail.png'} alt="Mail"/>Manufaktura@koda.com</li>
				</ul>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
)}


export default KontaktPage
