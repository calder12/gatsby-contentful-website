import React from 'react'
import Link from 'gatsby-link'
import {graphql} from 'gatsby'

import Layout from '../components/Layout'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}><h3>{node.title}</h3></Link>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}
const IndexPage = ({data}) => (
  <Layout>
  <ul className='blog-post'>
    {data.allContentfulBlog.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
  </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery {
    allContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [publishDate], order: DESC }
    ) {
        edges {
          node {
            id
            title
            slug
            content {
              childMarkdownRemark {
                excerpt
              }
            }
          }
        }
    }
   }
`
