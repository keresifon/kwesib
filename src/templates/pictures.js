import React from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import { graphql } from "gatsby"
import Header from '../components/header'
import Footer from '../components/Footer';


const AutoplaySlider = withAutoplay(AwesomeSlider)

  
const Pictures = (props) => {

console.log(props)

  const {edges} = props.data.allCloudinaryMedia;
  //let filtered = edges.filter(edge => edge.node.tags === props.pageContext.tags)
 //let filtered = edges.filter(edge => edge.node.tags == url)
  
  

  return (
    <>
    <Header />
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      fillParent={true}
      organicArrows={false}
      bullets={false}
    >
      {edges.map(edge => {
  
   
   
        return <div data-src={edge.node.secure_url} key={edge.node.id} />
      })}
    </AutoplaySlider>
    <Footer/>
    </>
  )
}

export default Pictures

export const query = graphql`
    query  ($tags:[String]){
  allCloudinaryMedia(filter: {tags: {in: $tags} }) {
    edges {
      node {
        secure_url
        id
        tags
      }
    }
  }
}
`