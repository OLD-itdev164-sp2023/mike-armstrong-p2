import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Box, Card, Heading } from 'rebass'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Grid>
      {data.allContentfulProjectContent.edges.map(edge => (
        <Card p={2} key={edge.node.id}>
          <Link to={edge.node.slug}>
            <GatsbyImage
              image={edge.node.heroImage.gatsbyImageData}
            />
          </Link>
          <Heading>{edge.node.title}</Heading>
          <div>{edge.node.footnote.childMarkdownRemark.excerpt}</div>
        </Card>
      ))}
    </Grid>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allContentfulProjectContent {
      edges {
        node {
          id
          title
          slug
          footnote {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 500
              height: 500
            )
          }
        }
      }
    }
  }
`