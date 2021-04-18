import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProjectImg = ({ filename }) => (
  <StaticQuery
    query={graphql`
    query {
      images: allFile {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
            name
            relativePath
          }
        }
      }
    }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename))

      if (!image) return null;

      // const imageFluid = image.node.childImageSharp.fluid
      return <GatsbyImage className="lg:max-w-lg shadow-lg" image={image.node.childImageSharp.gatsbyImageData} placeholder="blurred" layout="fullWidth" alt="Screenshot of the app"/>
    }}
  />
)

export default ProjectImg