import React, { Component } from 'react'
import Link from 'gatsby-link'

import './styles.scss'
const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

class Onama extends React.Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${pathPrefix + '/img/obg.png'})` }} id="onama">
    <div>
    <div className="container-fluid" id="dole" >
    </div>
    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
		</div>
	</div>
	<div class="row pt-13">
		<div class="col-md-6">
		</div>
		<div class="col-md-6">
			<h2 id="h2o">
				Zasto Bas Mi?
			</h2>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
		</div>
		<div class="col-md-6">
			<h1 id="h1o">
				Lorem & Lipsum
			</h1>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
		</div>
		<div class="col-md-6">
			<p id="p">
				Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. <br/> Aliquam eget sapien sapien. Curabitur in metus urna. <br/>  In hac habitasse platea dictumst,In am us.
			</p>
			<Link to="/kontakt" className="nav-link">
			<button type="button" id="joso" class="btn btn-outline-dark">KONTAKT</button>
			</Link>
		</div>
	</div>
</div>
    </div>
    </div>
    )
  }
}

export default Onama
