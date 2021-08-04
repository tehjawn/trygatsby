import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Images = () => (
  <Layout>
    <Seo title="Images" />
    <h1>Images</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Images
