import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about/about";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


const AboutPage = () => (
  <div className="centered-content">
    <Header siteTitle="Nancy Holder" />
    <SEO title="Home" />
    <About />
    <Footer />
  </div>
)

export default AboutPage;
