import styled from 'styled-components';
import { Link } from "gatsby";

export const ResumeContainer = styled.div`
  display: flex;
  height: 100%;
  background: #efefef;
  width: 100%;
  flex-direction: column;
`;

export const PortfolioContainer = styled.div`
  max-width: 1100px;
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 80px 0;
  }

  & p {
    color: #4d4d4d;
    margin: 5px 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    padding: 0;
  }
`;

export const ContentBlock = styled.div`
  margin: 20px 0;
`

export const ResumeColumn = styled.div`
    flex-basis: 100%;

    @media (min-width: 768px) {
      flex-basis: 48%;
    }
`;

export const Block = styled.div`
    padding: 0 20px;

    @media (min-width: 768px) {
      padding: 0;
    }
`;

export const Title = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  color: #4c0143;
  margin: 20px 0;
  letter-spacing: 0.04em;
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