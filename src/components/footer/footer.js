import React, { Component } from "react"
import { Copyright, FooterContainer } from "./styles";

class Footer extends Component {


    render() {
        let styles;
        if (this.props.background === 'purple') {
            styles = {
                footer: {
                    background: 'linear-gradient(to right, #4c0143 , #41004d);',
                },
                text: {
                    color: '#ffffff',
                }
            }
        } else {
            styles = {
                footer: {
                    background: '#efefef',
                },
                text: {
                    color: '#333333',
                }
            }

        }
        return (
            <FooterContainer style={styles.footer}>
                <Copyright style={styles.text}>© {new Date().getFullYear()} nancydeholder.com</Copyright>
            </FooterContainer>
        )
    }
}

export default Footer;