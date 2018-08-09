import React, { Component } from 'react'

import './style.scss'

const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
      const title = 'Usluge'
export default class index extends Component {
  render() {
    return (
      <div className="container-fluid pt-5">
      <div className="row">
         <div className="col-md-2">
         </div>
         <div className="col-md-8">
            <ul className="list-unstyled">
               <li className="media">
                  <img className="pt-3" src={pathPrefix + '/img/rubyor.svg'} alt="Ruby on Rails" width="45" height="100" />
                  <div className="media-body pl-2">
                     <h5 className="bu mt-0 mb-1">Ruby on Rails</h5>
                     <p className="uslugeg">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                  </div>
                  <hr/>
               </li>
               <li className="media my-4">
                  <img className="pt-3" src={pathPrefix + '/img/ruby.svg'} alt="Ruby" width="45" height="100" />
                  <div className="media-body pl-2">
                     <h5 className="bu mt-0 mb-1">Ruby</h5>
                     <p className="uslugeg">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                  </div>
                  <hr/>
               </li>
               <li className="media my-4">
                  <img className="mt-19" src={pathPrefix + '/img/ember.svg'} alt="Ember" width="45" height="45" />
                  <div className="media-body pl-2">
                     <h5 className="bu mt-0 mb-1">Ember</h5>
                     <p className="uslugeg">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                  </div>
                  <hr/>
               </li>
               <li className="media">
                  <img className="pt-3" src={pathPrefix + '/img/js.svg'} alt="Js" width="45" height="100" />
                  <div className="media-body pl-2">
                     <h5 className="bu mt-0 mb-1">JavaScript</h5>
                     <p className="uslugeg">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   </div>
    )
  }
}
