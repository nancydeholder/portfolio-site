import React from "react"

import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


const IndexPage = () => (
  <div className="centered-content">
    <Header background="purple" siteTitle="Nancy Holder" home />
    <SEO title="Home" />
    <Hero />
    <Footer background="purple" />
  </div>
)

export default IndexPage
