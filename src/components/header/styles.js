import styled from 'styled-components';
import { Link } from "gatsby";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  position: relative;
`
export const HeaderLink = styled(Link)`
  color: ${props => props.color ? "#4c0143" : "#ffffff"};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  padding: 0 15px;

  &:not(:last-child) {
    border-right: 1px solid ${props => props.color ? "#4c0143" : "#ffffff"};
  }

  &:hover {
   color: ${props => props.color ? 'rgba(76, 1, 67, 0.5)' : 'rgba(255,255,255, 0.5)'};
  }
`;

export const Logo = styled(Link)`
  color: #4c0143;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  font-size: 2rem;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover {
   opacity: 0.5;
  }
`;