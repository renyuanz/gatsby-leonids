import React from 'react'
import Link from 'gatsby-link'
import '../style/app.scss'
import avatarPic from '../components/avatar.jpg'

class Template extends React.Component {
  render() {
    const { location, children, data } = this.props
    const sidebar = (
      <div className="cover-card table-cell table-middle">
        <img src={avatarPic} className="avatar" />
        <Link to="/" className="author_name">
          {data.site.siteMetadata.author}
        </Link>
        <span className="author_job">{data.site.siteMetadata.job}</span>
        <span className="author_bio mbm">{data.site.siteMetadata.bio}</span>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
            <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
    return (
      <div className="row">
        <div className="col s12 m3">
          <div className="table cover">
            {sidebar}
          </div>
        </div>
        <div className="col s12 m9">
          <div className="post-listing">
            {children()}
          </div>
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template

export const query = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        title
        author
        job
        bio
      }
    }
  }
`;
