import React from 'react'
import Link from 'gatsby-link'

import './style.scss'
const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
      const title = 'O nama'
function onamaPage() {
return ( <body style={{ backgroundImage: `url(${pathPrefix + '/img/obg.png'})` }} id="onama">
    <div>
    <div className="container-fluid" >
    {/*     <img  id="imgg" src={pathPrefix + '/img/obg.png'} alt="bg"/> */}
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
			<h2 id="h2">
				Zasto Bas Mi?
			</h2>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
		</div>
		<div class="col-md-6">
			<h1 id="h1">
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
			<button type="button" class="btn btn-outline-dark">JOS</button>
		</div>
	</div>
</div>
<footer class="app-footer font-small pt-14">
    <div class="container text-center text-md-left">
      <div class="row">
        <div class="col-md-4 mx-auto">
          <h5 class="h5 mt-3 mb-4">Poslovne Usluge</h5>

          <p className="parag">
          There are many variations of passages of Lorem 
          Ipsum available, but the majority have suffered
           alteration in some form.</p>
        </div>
        <div class="col-md-4 mx-auto">
          <h5 class="h5 mt-3 mb-4">Ico Usluge</h5>

           <p className="parag">
          There are many variations of passages of Lorem 
          Ipsum available, but the majority have suffered
           alteration in some form.</p>
        </div><div class="col-md-4 mx-auto">
        <img  id="slika" src={pathPrefix + '/img/ico.png'} alt="bg"/>
          <h5 class="h5 mt-3 mb-4">Globalno Prisustvo</h5>
          <p className="parag">
          There are many variations of passages of Lorem 
          Ipsum available, but the majority have suffered
           alteration in some form.</p>
          </div>  
        </div>
        </div>
  </footer>
    </div>
    </body>
)}


export default onamaPage
