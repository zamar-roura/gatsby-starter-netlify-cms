import React from 'react'
import PropTypes from 'prop-types'
import logo from '../img/tag-icon.png'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
const Tag = ({tagText}) => (
  <div className="tag-card">  
  <img src={logo} alt="tag" style={{ width: '20px' }}/>
  <Link to={`/tags/${kebabCase(tagText)}/`}>{tagText}</Link>
  </div>
)


Tag.propTypes = {
  tagText: PropTypes.string,
}

export default Tag
