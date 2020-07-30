import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  background: #efefef;
  width: 100%;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1100px;
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 80px;
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 100%;
  overflow: hidden;
  max-height: 350px;

  @media (min-width: 768px) {
    flex-basis: 50%;
    margin-right: 5%;
    max-height: 450px;
  }

  & img {
    width: 100%;
  }
`;

export const Copy = styled.div`
    flex-basis: 100%;
    padding: 0 20px;

    @media (min-width: 768px) {
      flex-basis: 50%;
      padding: 0;
    }
`;