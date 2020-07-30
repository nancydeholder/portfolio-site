import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { BrowserRouter as Router,} from 'react-router-dom';


const IndexPage = () => (
  <div className="centered-content">
    <Header background="purple" siteTitle="Nancy Holder" home />
    <SEO title="Home" />
    <Hero />
    <Footer background="purple" />
  </div>
)

export default IndexPage
