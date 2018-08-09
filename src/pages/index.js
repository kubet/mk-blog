import React, { Component } from 'react'
import Link from 'gatsby-link'

import './styles.scss'
const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

class Onama extends React.Component {
  render() {
    return (
			<div className="container-fluid" id="onama">
   <div className="row">
      <div className="col-md-4">
      </div>
      <div className="col-md-4 pb-3" id="slikaa">
         <img alt="MK" src={pathPrefix + '/img/MK.svg'} width="100" height="100"/>
      </div>
      <div className="col-md-4">
      </div>
   </div>
   <div className="row">
      <div className="col-md-2">
      </div>
      <div className="col-md-8" id="center">
         <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget sapien sapien. Curabitur in metus urna.
         </p>
      </div>
      <div className="col-md-2">
      </div>
   </div>
</div>
    )
  }
}

export default Onama
