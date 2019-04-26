import Link from 'next/link';
import Head from 'next/head';

import PersonalizationStyles from './styles';

const Avatar = props => (
  <PersonalizationStyles>
    <Head>
      <title>Allicin FrontEnd || Choose Your Avatar</title>
    </Head>
    <h2 className="personalization__heading">Choose your avatar</h2>
    <div className="personalization__avatar--wrapper">
      <ul className="personalization__avatar--list">
        <li className="personalization__avatar--list-item">
          <Link href="/roles">
            <a title="person01.png">
              <img src="/static/people/person-01.png" alt="person01" />
            </a>
          </Link>
        </li>
        <li className="personalization__avatar--list-item">
          <Link href="/roles">
            <a title="person02.png">
              <img src="/static/people/person-02.png" alt="person02" />
            </a>
          </Link>
        </li>
        <li className="personalization__avatar--list-item">
          <Link href="/roles">
            <a title="person03.png">
              <img src="/static/people/person-03.png" alt="person03" />
            </a>
          </Link>
        </li>
        <li className="personalization__avatar--list-item">
          <Link href="/roles">
            <a title="person04.png">
              <img src="/static/people/person-04.png" alt="person04" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
    <p className="skip__for--now">
      <Link href="/roles">
        <a title="Choose your role">Skip the avatar for now.</a>
      </Link>
    </p>
  </PersonalizationStyles>
);

export default Avatar;
