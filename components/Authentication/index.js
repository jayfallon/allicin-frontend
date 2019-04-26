import Link from 'next/link';

import SignUp from './SignUp';
import SignIn from './SignIn';
import ResetPassword, { ResetCheck } from './ResetPassword';

const Authentication = props => (
  <>
    <h2>Authentication</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo repellat
      dolore illum cum! Incidunt ab quasi iure voluptatibus. Consequatur id
      ullam facere nemo commodi possimus voluptates? Quae rem saepe ad!
    </p>
    <p>
      <Link href="/signin">
        <a title="sign in link">Sign In</a>
      </Link>
    </p>
    <p>
      <Link href="/signout">
        <a title="sign out">Sign Out</a>
      </Link>
    </p>
    <p>
      <Link href="/signup">
        <a title="sign up">Sign Up</a>
      </Link>
    </p>
    <p>
      <Link href="/reset-password">
        <a title="reset-password">Reset Password</a>
      </Link>
    </p>
  </>
);

export default Authentication;

export { SignUp, SignIn, ResetPassword, ResetCheck };
