import styled from 'styled-components';

const AvatarStyles = styled.section`
  div.person__form--wrapper {
    background-color: ${props => props.theme.authFormBackground};
    margin: 0 auto;
    padding: 2rem;
    max-width: 54rem;
    box-shadow: ${props => props.theme.boxShadow};

    h2 {
      margin-bottom: 2rem;
      font-size: 2.8rem;
      text-align: center;
    }
  }
`;
