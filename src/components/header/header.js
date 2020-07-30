import PropTypes from "prop-types";
import React, { Component } from "react";
import { HeaderContainer, HeaderLink, Logo } from "./styles";


class Header extends Component {

  render() {
    let styles;
    let color;
    const isHome = this.props.home;
    if (this.props.background === 'purple') {
      styles = {
        footer: {
          background: 'linear-gradient(to right, #4c0143 , #41004d);',
        },
      }
      color = false;
    } else {
      styles = {
        footer: {
          background: '#efefef',
        },
      }
      color = true;
    }
    return (
      
      <HeaderContainer style={styles.footer}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1100,
            padding: `15px 0`,
            display: `flex`,
            width: `100%`,
            justifyContent: isHome ? 'center' : 'space-between' ,
            alignItems: `center`,
          }}
        >
          {!this.props.home && (
            <Logo
              to="/">
              NH
            </Logo>
          )}
          <div>
            <HeaderLink color={color}
              to="/about">
              About
          </HeaderLink>
            <HeaderLink color={color}
              to="/work">
              Work
          </HeaderLink>
            <HeaderLink color={color}
              to="/resume">
              Resume
          </HeaderLink>
          </div>
        </div>
      </HeaderContainer>
    )
  }

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
