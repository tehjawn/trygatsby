import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AnimationHi from "../components/animation_hi"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <AnimationHi size={80} />
    <Link to="/images">Go to Images</Link>
  </Layout>
)

export default IndexPage
