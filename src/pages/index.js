import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import Onama from '../components/onama'
import SitePost from '../components/SitePost'

import './styles.scss'
const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const site = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.remark.posts')
    const sortedPosts = sortBy(posts, post =>
      get(post, 'post.frontmatter.date')
    ).reverse()
    sortedPosts.forEach((data, i) => {
      const layout = get(data, 'post.frontmatter.layout')
      const path = get(data, 'post.path')
      if (layout === 'post' && path !== '/404/') {
        pageLinks.push(
          <LazyLoad height={500} offset={500} once={true} key={i}>
            <SitePost data={data.post} site={site} isIndex={true} key={i} />
          </LazyLoad>
        )
      }
    })

    return (
      <div>
            <html style={{ backgroundImage: `url(${pathPrefix + '/img/obg.png'})` }} id="onama">
    <div>
    <div className="container-fluid" >
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
			<Link to="/kontakt" className="nav-link">
			<button type="button" id="joso" class="btn btn-outline-dark">KONTAKT</button>
			</Link>
		</div>
	</div>
</div>
    </div>
    </html>
        <Helmet
        />
        {pageLinks}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    remark: allMarkdownRemark {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            categories
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`
