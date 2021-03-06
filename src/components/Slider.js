import React from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import { useStaticQuery, graphql } from "gatsby"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slide = () => {
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
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
      fillParent={true}
      organicArrows={false}
      bullets={false}
    >
      {data.allCloudinaryMedia.edges.map(edge => {
        return <div data-src={edge.node.secure_url} key={edge.node.id} />
      })}
    </AutoplaySlider>
  )
}

export default Slide
