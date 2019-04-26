import styled from 'styled-components';

const HomepageStyles = styled.section`
  nav.homepage__nav ul {
    padding: 2rem 0;
    display: flex;
    justify-content: flex-end;
  }
  div.homepage__dash--wrapper {
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  div.homepage__dash--personal {
    display: flex;
    img {
      width: 10rem;
      height: 11.21rem;
    }
    ul {
      margin-left: 1.5rem;
    }
  }

  ul.homepage__dash--meta {
    display: flex;
    li {
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      span:first-child {
        font-size: 1.5rem;
      }
      span: last-child {
        font-size: 3.4rem;
        font-weight: bold;
      }
    }
  }

  div.homepage__group--wrapper {
    margin-top: 5rem;
    h3 {
      margin-bottom: 2rem;
      padding: 0 0 2rem;
      border-bottom: 1px solid #000;
      font-size: 2.8rem;
      font-weight: bold;
    }

    div.class__card--grid {
      background-color: #fff;
      padding: 1rem;
      width: 32rem;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr;
      grid-template-areas:
        'course'
        'comments'
        'tutor'
        'schedule'
        'join';
    }

    div.class__card--tutor {
      grid-area: tutor;
      display: flex;
    }

    div.class__card--tutor img {
      margin-right: 1.5rem;
    }

    div.class__card--course {
      grid-area: course;
      display: flex;
    }

    div.class__card--course img {
      margin-right: 1rem;
    }

    div.class__card--comments {
      grid-area: comments;
      padding: 1rem;
      border-top: 1px solid #d3d9d6;
      border-bottom: 1px solid #d3d9d6;
      font-style: italic;
    }

    div.class__card--join {
      grid-area: join;
    }

    ul.class__card--meeting-list {
      border-top: 1px solid #d3d9d6;
      border-bottom: 1px solid #d3d9d6;
      display: grid;
      grid-gap: 0.5rem;
      grid-template-columns: repeat(3, 1fr);
    }

    ul.class__card--meeting-list li {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ul.class__card--meeting-list li span {
      color: #555;
      font-size: 1.4rem;
    }
    ul.class__card--meeting-list li span.number {
      padding: 1rem 0;
      color: #000;
      font-size: 3.3rem;
      font-weight: bold;
    }

    div.class__card--join button {
      background-color: #767676;
      color: #fff;
      font-weight: bold;
      font-size: 2rem;
      padding: 1.8rem 1rem;
      width: 100%;
      cursor: pointer;
      &:hover {
        background: #000;
      }
    }

    div.homepage__group--grid {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    }
  }

  div.homepage__page--wrapper {
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

export default HomepageStyles;
