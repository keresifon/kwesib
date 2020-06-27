import React from "react"
//import { Carousel, Image } from 'grommet';
//import { Image } from '@bit/grommet.grommet.image';
import { Carousel } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

const Slider = () => {
    const data = useStaticQuery(graphql`
    query {
      allCloudinaryMedia(filter: { tags: { eq: "home" } }) {
        edges {
          node {
            secure_url
            id
          }
        }
      }
    }
  `)
  return (
    <>
      <div >
        <Carousel>
        {data.allCloudinaryMedia.edges.map(edge => {
          return (
          <Carousel.Item  >
            <img 
              className="img-fluid vh-100  "
              src={edge.node.secure_url}
              alt="First slide"
            />
            
          </Carousel.Item>
        )})}
        </Carousel>
      </div>
    </>
  )
}

export default Slider
