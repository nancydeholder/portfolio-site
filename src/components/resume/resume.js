import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import { ResumeContainer, PortfolioContainer, Flex, ResumeColumn, Title, ContentBlock, Block, Button } from "./styles";

const Resume = () => (
    <ResumeContainer>
        <PortfolioContainer>
            <Block>
                <div>
                    <a href="/images/nancy_holder_resume_2020.pdf" target="_blank">
                        <img style={{ 'height': '30px', }} src="/images/download.svg" />
                    </a>
                </div>
                <Title style={{ 'marginBottom': '0' }}>NANCY HOLDER</Title>
                <p><b>DEVELOPER & DESIGNER</b></p>
                <p class="portfolio-base-font">913.271.1262 | nancydeholder@gmail.com</p>
            </Block>
            <Flex>
                <ResumeColumn>
                    <Title>EXPERIENCE</Title>
                    <ContentBlock>
                        <p class="portfolio-base-font"><b>C2FO</b> | Leawood, KS</p>
                        <p class="portfolio-base-font">Senior Frontend Web Developer</p>
                        <p class="portfolio-base-font">October 2015 - Present</p>
                        <p class="portfolio-base-font portfolio-resume--new-line">
                            Automate new buyer launches and onboarding
                            flows for marketing team. Partner with
                            supplier experience team on creation of new
                            UI and component library for C2FO application.
                            Architected and developed new registration
                            flow for C2FO application, driving registration
                            completion rates up by 200%. Automated the
                            creation of marketing materials for buyer launches
                            by creating a pdf generation application.</p>
                    </ContentBlock>
                    <ContentBlock>
                        <p class="portfolio-base-font"><b>LAUNCHCODE</b> | Kansas City, MO</p>
                        <p class="portfolio-base-font">Teaching Assistant</p>
                        <p class="portfolio-base-font">August 2018 - April 2019</p>
                        <p class="portfolio-base-font portfolio-resume--new-line">
                            Assist LaunchCode students through
                            coursework in Python, Javascript, HTML, CSS.
                            Provide mentorship to prepare students for
                            apprenticeships in computer programming.</p>
                    </ContentBlock>
                    <ContentBlock>
                        <p class="portfolio-base-font"><b>VML</b> | Kansas City, MO</p>
                        <p class="portfolio-base-font">Web Developer</p>
                        <p class="portfolio-base-font">November 2015 - October 2018</p>
                        <p class="portfolio-base-font portfolio-resume--new-line">
                            Developed complex applications and highly visible
                            websites for Ford and Lincoln brands in a fast
                            paced environment. Led a development team of 6
                            and worked with business analysts to help provide
                            time estimation and schedules for projects.
                            Provided feedback to creatives on issues with
                            layout and functionality. Architected AEM sites to
                            build reusable and author friendly components.
                        </p>
                    </ContentBlock>

                    <ContentBlock>
                        <p class="portfolio-base-font"><b>BROCKTON CREATIVE GROUP</b> | Kansas City, MO</p>
                        <p class="portfolio-base-font">Designer/Developer</p>
                        <p class="portfolio-base-font">August 2013 - November 2015</p>
                        <p class="portfolio-base-font portfolio-resume--new-line">
                            Built sites from start to finish, including site map,
                            wireframe, UI design, backend, and frontend. UI
                            design when needed. Maintained and updated
                            live sites for clients. Led quality assurance on all
                            web development projects.</p>
                    </ContentBlock>
                    <ContentBlock>
                        <p class="portfolio-base-font"><b>BROCKTON CREATIVE GROUP</b> | Kansas City, MO</p>
                        <p class="portfolio-base-font">Design Intern</p>
                        <p class="portfolio-base-font">January 2013 - August 2013</p>
                        <p class="portfolio-base-font portfolio-resume--new-line">Created marketing concepts, websites, collateral
                        material, and social media graphics. Assisted art
                        director on developing branding concepts. Edited
                        photos for website use and assisted on additional
                tasks for a wide variety of clients.</p>
                    </ContentBlock>

                    <ContentBlock>
                        <p class="portfolio-base-font"><b>COMMERCE BANK</b> | Kansas City, MO</p>
                        <p class="portfolio-base-font">Graphic Design Intern</p>
                        <p class="portfolio-base-font">May 2012 - August 2012</p>
                        <p class="portfolio-base-font portfolio-resume--new-line">Worked along side the Creative Solutions Group
                        to develop promotional material for all branches
                        of Commerce Bank. Completed over 170 projects
                        and worked with fellow employees to develop
                marketing tactics.</p>
                    </ContentBlock>

                </ResumeColumn>

                <ResumeColumn>
                    <Title>EDUCATION</Title>
                    <p class="portfolio-base-font"><b>THE UNIVERSITY OF KANSAS</b> | Lawrence, KS</p>
                    <p class="portfolio-base-font">BFA in Design with a concentration in
            Visual Communication</p>
                    <p class="portfolio-base-font portfolio-resume--new-line">Minor in Business</p>
                    <p class="portfolio-base-font portfolio-resume--new-line">Certificate in Service Learning</p>
                    <p class="portfolio-base-font portfolio-resume--new-line">Research Experience Program Certificate</p>

                    <Title>SKILLS</Title>
                    <p class="portfolio-base-font">React, Javascript, Typescript, Angular, ES6, SCSS,
                    CSS, HTML, JQuery, NodeJs, Karma, Jasmine, Jest,
                    Docker, Webpack, Git, Gulp, Grunt, Python, AEM,
                    Adobe Analytics, Adobe Target, Adobe Creative
                    Suite, Sketch, Abstract</p>
                    <br />
                    <p class="portfolio-base-font">Fluent in Spanish</p>

                    <Title>INVOLVEMENT</Title>
                    <p class="portfolio-base-font"><b>UNLEASHED PET RESCUE</b></p>
                    <p class="portfolio-base-font">Volunteer/Foster</p>
                </ResumeColumn>
            </Flex>
        </PortfolioContainer>
    </ResumeContainer>
)
export default Resume

