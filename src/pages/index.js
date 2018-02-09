import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <section className="post" key={post.node.frontmatter.path}>
                <header className="post-header">
                  <p className="post-meta">
                    <span className="post-date">
                    {post.node.frontmatter.date}
                    </span>
                  </p>

                  <h4>
                    <Link to={post.node.frontmatter.path} className="post-title" title={`${post.node.frontmatter.title}`}>
                      {post.node.frontmatter.title}
                    </Link>
                  </h4>

                  <div className="post-description">
                    <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                  </div>
                </header>
              </section>
            )
          }
        })}
      </div>
    )
  }
}



BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`
