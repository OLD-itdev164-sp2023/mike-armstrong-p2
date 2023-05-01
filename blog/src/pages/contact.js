import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import image from "../images/contact-banner.jpg"

const imageStyle = {
    height: 175,
    width: 350, 
    marginBottom: "1.45rem",
    boxShadow: "0 0 8px white",
}

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact
    return (
        <Layout>
            <Seo title="Home" />
            <h1>Contact Us</h1>
            <p>Please send all inquiries to: </p>
            <div>{company}</div>
            <div>{`C/O ${name}`}</div>
            <div>{address}</div>
            <div style={{ maxWidth: "300px", marginBotom: "1.45rem" }}>
            <img src={image} style={imageStyle}/>
            </div>
            <Link to="/">Home</Link>
            </Layout>
        )
}

export default Contact

export const query = graphql`
    query {
        site {
        siteMetadata {
            contact {
                name
                company
                address
                }
            }
        }
    }
`
