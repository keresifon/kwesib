import React from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import { graphql } from "gatsby"
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


const AutoplaySlider = withAutoplay(AwesomeSlider)

  
const Pictures = (props) => {



const {edges} = props.data.allCloudinaryMedia;

let pageColor = '';

if (props.uri === "/cl") 
pageColor = "Color"
else if (props.uri === "/bw") 
pageColor = "Monochrome"


  
  

  return (
    <>
    {/* <Header /> */}
    <Helmet title={pageColor}/>
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
      fillParent={true}
      organicArrows={false}
      bullets={false}
      
    >
      {edges.map(edge => {
  
   
   
        return <div data-src={edge.node.secure_url} className = "img-fluid" key={edge.node.id} />
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