import React from "react"
import { Link } from "gatsby"

import Slide from '../components/Slider';
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   <Slide />
  </Layout>
)

export default IndexPage
