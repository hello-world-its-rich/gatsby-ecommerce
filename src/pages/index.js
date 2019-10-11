import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World!</h1>
    <p>Coming soon! Some of my favorite projects will be found here.</p>
    <p>I am always happy to help where needed</p>
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
</div> */}
   
  </Layout> 
)

export default IndexPage
