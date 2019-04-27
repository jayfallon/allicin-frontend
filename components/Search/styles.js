import styled from 'styled-components';

const SearchStyles = styled.section`
  div.search__school--wrapper {
    margin: 0 auto;
    padding: 2rem;

    h2 {
      margin-bottom: 2rem;
      font-size: 2.8rem;
      text-align: center;
    }
    h3 {
      margin: 4rem 0;
      font-size: 2.4rem;
      text-align: center;
    }

    form {
      text-align: center;
    }

    input.schools__search--input {
      margin: 0 auto;
      padding: 1.2rem 0.6rem;
      min-width: 45rem;
      max-width: 54rem;
      font-size: 1.6rem;
    }

    ul.schools__search--list {
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
    }

    ul.schools__search--list li {
      background-color: #fff;
      padding: 2rem 2rem 4rem;
      text-align: center;
    }

    .skip__link {
      margin-top: 5rem;
    }
  }
`;

export default SearchStyles;
