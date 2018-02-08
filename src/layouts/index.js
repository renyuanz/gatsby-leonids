import React from 'react'
import Link from 'gatsby-link'
import '../style/app.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const sidebar = (
      <div className="cover-card table-cell table-middle">

        <img src="" alt="" className="avatar" />
        <Link to="/" className="author_name">
          name
        </Link>
        <span className="author_job">job</span>
        <span className="author_bio mbm">bio</span>
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
