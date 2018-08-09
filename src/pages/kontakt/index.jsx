import React from 'react'
import Link from 'gatsby-link'

import './style.scss'
const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
      const title = 'Kontakt'
function KontaktPage() {
return (
      <div className="container-fluid" id="forma">
   <div className="row">
      <div className="col-md-12">
         <div className="row">
            <div className="col-md-12">
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
            </div>
         </div>
         <div className="row">
            <div className="col-md-4">
               <form name="kont" data-netlify="true" method="POST" netlify-honeypot="bot-field">
                  <p className="hidden">
                     <label>Ne Popunajvati<input name="bot-field" /></label>
                  </p>
                  <p>
                     <label>Ime</label>
                     <input type="text" className="form-control" name="name" />
                  </p>
                  <p>
                     <label>Email</label>
                     <input type="text" className="form-control" name="email" />
                  </p>
                  <p>
                     <label>Poruka</label>
                     <textarea name="message" className="form-control" rows="5" ></textarea>
                  </p>
                  <p>
                     <button className="btn btn-warning btn-lg" type="submit">Posalji</button>
                  </p>
               </form>
            </div>
            <div className="kontakti">
               <div className="media">
                  <a href="http://"><img  className="pr-1" src={pathPrefix + '/img/github-logo.svg'} alt="Github" width="30" height="100"/><span className="nodec" >Link za GitHub</span></a>
               </div>
               <div className="media">
                  <a className="iconk" href="http://"><img  className="pr-1" src={pathPrefix + '/img/Linkedin-logo.svg'} alt="Linkedin" width="30" height="100"/><span className="nodec" >Link za Linkedin</span></a>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
)}


export default KontaktPage
