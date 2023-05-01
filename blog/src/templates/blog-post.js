import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { H1 } from '../components/Heading'

const BlogPost = ({ data }) => {
    const { title, description, heroImage } = data.contentfulProjectContent;

    return (
        <Layout>
            <GatsbyImage
                image={heroImage.GatsbyImageData}
            />
            <H1>{title}</H1>
            <div dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html}}></div>
        </Layout>
    )
}

export default BlogPost;

export const pageQuery = graphql`
    query projectContentQuery($slug: String!) {
        contentfulProjectContent(slug: { eq: $slug }) {
            title
            slug
            description {
                childMarkdownRemark {
                    html
                }
            }
            heroImage {
                gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: BLURRED
                    width: 960
                )
            }
        }
    }
`