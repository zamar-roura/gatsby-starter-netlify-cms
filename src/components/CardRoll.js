import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Tag from '../components/Tag'
class CardRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
          <div className = "card"> 
            <Link to={post.fields.slug}><h1>{post.frontmatter.title}</h1></Link>
            <h2> by Zamar Roura</h2>
            <div className = "card-preview">
              {post.excerpt}
            </div>
           <Link to={post.fields.slug}>
              read full post ({post.frontmatter.readtime} min)
            </Link>
            <div className = "card-footer">
              <span>{post.frontmatter.date}</span>
              {post.frontmatter.tags && post.frontmatter.tags.length ? (
                post.frontmatter.tags.map((tag) => (
                    <Tag tagText={tag}></Tag>
                ))
            ) : null}
            </div>
          </div> 
      ))}
    </div>
  )
  }
}

CardRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query CardRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                tags
                readtime
                date(formatString: "mm - yyyy")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CardRoll data={data} count={count} />}
  />
)
