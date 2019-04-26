import styled from 'styled-components';
import media from '../MediaQueries';

const PersonalizationStyles = styled.section`
  h2.personalization__heading {
    margin-bottom: 2rem;
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
  }
  div.personalization__avatar--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  ul.personalization__avatar--list {
    display: grid;
    grid-template-columns: 1fr;
    ${media.mamabear`
      grid-template-columns: 1fr 1fr;
   `}
    ${media.sisterbear`
      grid-template-columns: repeat(3, 1fr);
   `}
   ${media.brotherbear`
      grid-template-columns: repeat(4, 1fr);
   `}
  }
  li.personalization__avatar--list-item {
    background-color: #fff;
    margin: 0 0 2rem;
    padding: 1rem 1rem 0.2rem;
    max-width: 24rem;
    box-shadow: ${props => props.theme.boxShadow};
    ${media.mamabear`
    margin: 0 1rem 2rem;
   `}
    img {
      width: 22rem;
    }
  }

  p.skip__for--now {
    padding: 2rem 0;
    font-size: 1.6rem;
    text-align: center;
  }
`;

export default PersonalizationStyles;
