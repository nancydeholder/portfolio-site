import styled from 'styled-components';
import { Link } from "gatsby";

export const WorkContainer = styled.div`
  display: flex;
  height: 100%;
  background: #efefef;
  width: 100%;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  background: ${props => props.color};

  &:last-child {
    padding-bottom: 20px;
  }
`;

export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  flex-flow: ${props => props.reverse ? 'column-reverse' : '' };

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HalfContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    padding-top: 80px;
    flex-basis: 48%;
    max-width: 48%;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  max-height: 200px;

  @media (min-width: 768px) {
    max-height: 350px;
  }

  & img {
    width: 100%;
  }
`

export const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;

  @media (min-width: 768px) {
    padding: 0;
  }
`

export const Button = styled(Link)`
  background-color: #4c0143;
  padding: 10px 15px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  align-self: flex-start;
`

export const Title = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  color: #4d4d4d;
  margin: 0;
  letter-spacing: 0.04em;
`

export const Content = styled.p`
  font-size: 1rem;
  color: #4d4d4d;
  margin-bottom: 20px;
  letter-spacing: 0.04em;
`