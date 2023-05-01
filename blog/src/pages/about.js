import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import image from "../images/about-banner.jpg"

const imageStyle = {
    height: 175,
    width: 350, 
    marginBottom: "1.45rem",
    boxShadow: "0 0 8px white",
}

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Home" />
            <h1>About Us</h1>
            <p>{`${company} was started by ${name} in 2022.`}</p>
            <p>{`At ${company} we bring the best courses to the forefront of the game!`}</p>
            <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
            <img src={image} style={imageStyle}/>
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    name
                    company
                }
            }
        }
    }
`