import React from "react"
import { Headline, SubHeadline } from './styles';

const Hero = () => (
    <div>
    <Headline style={{ color: '#ffffff', fontSize: '3.5rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center', margin: '0'}}>NANCY HOLDER</Headline>
    <SubHeadline style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.2rem', fontWeight: '400', textAlign: 'center', margin: '0' }}>Developer, designer, dog lover and ice cream maker.</SubHeadline>
    </div>
)

export default Hero
