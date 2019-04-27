import Link from 'next/link';

import LandingStyles from './styles';

const Landing = props => (
  <LandingStyles>
    <div className="landing__page--wrapper">
      <h2>Welcome to Allicin</h2>
      <p>
        Allicin is a lightweight learning management system (LMS) complete with
        class/course building and scheduling tools that will enable instructors
        to locate students with similar interests and engage in skills sharing
        without the constraints of a formal education framework or geographical
        boundaries.
      </p>
      <h3>Workflows</h3>
      <div className="workflows__wrapper">
        <ul>
          <h4>Authentication</h4>
          <ul>
            <li>
              <Link href="/signup">
                <a title="sign up">Sign Up</a>
              </Link>
            </li>
            <li>
              <Link href="/signin">
                <a title="sign in link">Sign In</a>
              </Link>
            </li>
            <li>
              <Link href="/signout">
                <a title="sign out">Sign Out</a>
              </Link>
            </li>
            <li>
              <Link href="/reset-password">
                <a title="reset-password">Reset Password</a>
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </LandingStyles>
);

export default Landing;
