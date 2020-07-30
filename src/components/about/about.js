import React from "react"
import { AboutContainer, ContentContainer, ImageContainer, Copy } from "./styles";


const About = () => (
  <AboutContainer>
    <ContentContainer>
      <ImageContainer>
      <img src="/images/nancy_holder.jpg" />
      </ImageContainer>
      <Copy>
        <p style={{ 'lineHeight':'1.5', 'letterSpacing': '0.05em', 'color': '#4d4d4d' }}>
          I've been professionaly developing and designing for around 6 years now. I love to solve problems, learn new things and create beautiful user experiences.
          When I'm not working, you can find me running outside, making homemade ice cream, covered in crumbs from consuming a delicious meal or exploring a new area. 
          Also, you can always find my dog, Ginger, by my side.
        </p>
        <br/>
        <p style={{ 'lineHeight':'1.5', 'letterSpacing': '0.05em', 'color': '#4d4d4d' }}>
          Shoot me an email if you want to work together <a style={{'textDecoration': 'none', 'color': '#4c0143'}} href="mailto:nancydeholder@gmail.com">nancydeholder@gmail.com</a>
        </p>
      </Copy>
    </ContentContainer>
  </AboutContainer>
)

export default About
