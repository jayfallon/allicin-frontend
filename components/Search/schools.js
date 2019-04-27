import Link from 'next/link';

import SearchStyles from './styles';

class SearchSchools extends React.Component {
  render() {
    const localSchools = [
      'Boston University',
      'UMass Amherst',
      'Harvard University',
      'Northeastern University',
      'UMass Lowell',
      'UMass Boston',
      'Boston College',
      'Bunker Hill CC',
      'Bridgewater State',
      'MIT',
    ];

    return (
      <SearchStyles>
        <div className="search__school--wrapper ">
          <h2>Choose Your School</h2>
          <form>
            <input
              placeholder="Search"
              className="schools__search--input"
              type="text"
            />
          </form>
          <h3>Popular Schools</h3>
          <ul className="schools__search--list">
            {localSchools.map((value, index) => (
              <li key={index}>
                <Link href="/class">
                  <a title="{value}">{value}</a>
                </Link>
              </li>
            ))}
          </ul>
          <p className="skip__link">
            <Link href="/class">
              <a title="classes">Skip to Classes</a>
            </Link>
          </p>
        </div>
      </SearchStyles>
    );
  }
}

export default SearchSchools;
