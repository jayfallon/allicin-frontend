import styled from 'styled-components';

const AuthFormStyles = styled.section`
  div.auth__form--wrapper {
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

  legend {
    margin-bottom: 2rem;
    font-size: 2.8rem;
    text-align: center;
  }

  div.auth__form--group {
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: column;
  }

  div.auth__form--group input[type='text'],
  div.auth__form--group input[type='password'] {
    border: ${props => props.theme.inputBorder};
    padding: 0.6rem;
    font-size: 1.8rem;
  }

  div.auth__form--submit {
    padding: 1rem 0 2rem;
    display: flex;
    justify-content: flex-end;
  }

  a.auth__form--button button {
    background-color: ${props => props.theme.submitButtonBg};
    padding: 0.9rem 1.8rem;
    border: 1px solid ${props => props.theme.submitButtonBg};
    color: ${props => props.theme.submitButtonColor};
    font-size: 1.8rem;
  }

  ul.auth__form--help {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    li {
      padding: 0 2rem;
    }
    a {
      font-size: 1.5rem;
    }
  }

  p.auth__reset--text {
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }
`;

export default AuthFormStyles;
