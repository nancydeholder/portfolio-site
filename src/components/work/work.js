import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import { WorkContainer, ContentContainer, ProjectContainer, HalfContainer, 
ImageContainer, BackgroundContainer, Button, BlockContent, Title, Content } from "./styles";


const Work = () => (
    <WorkContainer>
        <ContentContainer>
            <BackgroundContainer>
                <ProjectContainer>
                    <HalfContainer>
                        <ImageContainer>
                            <img src="/images/owner-mockup-site.png" alt="ford-owner-site" />
                        </ImageContainer>
                    </HalfContainer>
                    <HalfContainer>
                        <BlockContent>
                            <Title>Ford Owner 2.0</Title>
                            <Content>A start on the redesign of the Owner experience for Ford. Breaking everything into micro components and creating feature componets out of it. This site has an MVP approach with monthly roll outs of new features.</Content>
                            <Button href="https://owner.ford.com" target="_blank">Vist Site</Button>
                        </BlockContent>
                    </HalfContainer>
                </ProjectContainer>
            </BackgroundContainer>
            <BackgroundContainer color="#ffffff">
            <ProjectContainer reverse>
                <HalfContainer>
                    <BlockContent>
                        <Title>Lincoln Way App</Title>
                        <Content>The Lincoln Way App site is an informational site for the application. The purpose is to give consumers more information on the Lincoln Way Application.</Content>
                        <Button href="https://www.lincoln.com/lincolnway/app/" target="_blank">Vist Site</Button>
                    </BlockContent>
                </HalfContainer>
                <HalfContainer>
                    <ImageContainer>
                        <img src="/images/lincoln-way-app.jpg" alt="ford-owner-site" />
                    </ImageContainer>
                </HalfContainer>
            </ProjectContainer>
            </BackgroundContainer>
            <BackgroundContainer>
            <ProjectContainer>
                <HalfContainer>
                    <ImageContainer>
                        <img src="/images/ford-gt.jpg" alt="ford-owner-site" />
                    </ImageContainer>
                </HalfContainer>
                <HalfContainer>
                    <BlockContent>
                        <Title>Ford GT</Title>
                        <Content>Ford GT performance site was built alongisde the GT Application (only live for one month). This site maintains a configurator component to allow applicants to configure different versions of the GT.</Content>
                        <Button href="https://www.ford.com/performance/gt/" target="_blank">Vist Site</Button>
                    </BlockContent>
                </HalfContainer>
            </ProjectContainer>
            </BackgroundContainer>
            <BackgroundContainer color="#ffffff">
            <ProjectContainer reverse>
                <HalfContainer>
                    <BlockContent>
                        <Title>HTK Architects</Title>
                        <Content>A showcase for their architecture work, this site was designed around HTK branding standards.</Content>
                        <Button href="http://htkarchitects.net/" target="_blank">Vist Site</Button>
                    </BlockContent>
                </HalfContainer>
                <HalfContainer>
                    <ImageContainer>
                        <img src="/images/htk-architects.jpg" alt="HTK Architects" />
                    </ImageContainer>
                </HalfContainer>
            </ProjectContainer>
            </BackgroundContainer>
            <BackgroundContainer>
            <ProjectContainer>
                <HalfContainer>
                    <ImageContainer>
                        <img src="/images/kc-streetcar.jpg" alt="KC Streetcar" />
                    </ImageContainer>
                </HalfContainer>
                <HalfContainer>
                    <BlockContent>
                        <Title>KC Streetcar</Title>
                        <Content>An informational site for the KC Streetcar. The site was built around an existing style guide and provides updates on future plance for the streetcar.</Content>
                        <Button href="http://kcstreetcar.org/" target="_blank">Vist Site</Button>
                    </BlockContent>
                </HalfContainer>
            </ProjectContainer>
            </BackgroundContainer>
        </ContentContainer>
    </WorkContainer>
)
export default Work
