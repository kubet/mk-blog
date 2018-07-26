import React from 'react'
import Link from 'gatsby-link'

import './style.scss'
const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
      const title = 'Kontakt'
function KontaktPage() {
return ( 
    <div>
    <div className="container-fluid">
         <img  id="slika" src={pathPrefix + '/img/hbg.png'} alt="bg"/>
        <div>
        <ul class='social'>
  
  <li className="pb-1">
  <a href="http://google.com"><img  id="fb" src={pathPrefix + '/img/fb.png'} alt="fb"/>
    </a>
  </li>
  <li className="pb-1">
  <a href="http://google.com"><img  id="yt" src={pathPrefix + '/img/yt.png'} alt="yt"/></a>
  </li>
  <li className="pb-1">
  <a href="http://google.com"><img  id="email" src={pathPrefix + '/img/email.png'} alt="email"/></a>
  </li>
  
</ul>
        </div>
        <div className="row">
        <div className="col-md-12">
        <div class="row pt-7">
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
                <img  className="img-fluid pt-2" id="kontakt" src={pathPrefix + '/img/kontakt.png'} alt="Kontakt"/>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
)}


export default KontaktPage
