import styled from 'styled-components';
import media from '../MediaQueries';

const AuthorizationStyles = styled.section`
  h2.roles__heading {
    margin-bottom: 2rem;
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
  }
  div.roles__selection--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul.roles__selection--list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
  li.roles__selection--list-item {
    background-color: #fff;
    margin: 0 0 2rem;
    padding: 0 !important;
    width: 100%;
    box-shadow: ${props => props.theme.boxShadow};
    display: flex;
    ${media.mamabear`
    margin: 0 1rem 2rem;
   `}
  }

  h4.role__select--heading {
    font-size: 2.4rem;
    font-weight: bold;
  }

  div.role__select--meta {
    padding: 1rem 3rem 1rem 0;
  }

  div.role__select--meta p {
    padding-bottom: 1.8rem;
  }

  div.role__select--graphic {
    margin-right: 2rem;
  }

  p.skip__for--now {
    padding: 2rem 0;
    font-size: 1.6rem;
    text-align: center;
  }
`;

export default AuthorizationStyles;
