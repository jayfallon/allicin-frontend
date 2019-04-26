import styled from 'styled-components';

const LandingStyles = styled.section`
  div.landing__page--wrapper {
    background-color: ${props => props.theme.authFormBackground};
    margin: 0 auto;
    padding: 2rem;
    box-shadow: ${props => props.theme.boxShadow};

    h2 {
      margin-bottom: 2rem;
      font-size: 2.8rem;
      text-align: center;
    }
    h3 {
      margin-bottom: 1.8rem;
      font-size: 2.4rem;
      text-align: center;
    }
    h4 {
      margin-bottom: 1.6rem;
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export default LandingStyles;
