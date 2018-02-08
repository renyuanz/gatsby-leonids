import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Link to="/" className="btn">
          Home
        </Link>
        <div id="post">
          <header className="post-header">
            <h1 title={`${post.frontmatter.title}`}>{post.frontmatter.title}</h1>
            <span className="post-meta">
              <span className="post-date">
                {post.frontmatter.date}
              </span>
            </span>

          </header>

          <article className="post-content" dangerouslySetInnerHTML={{ __html: post.html }}></article>
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
