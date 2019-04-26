import Link from 'next/link';
import Head from 'next/head';
import AuthFormStyles from './styles';

const ResetPassword = props => (
  <AuthFormStyles>
    <Head>
      <title>Allicin FrontEnd || Reset Password</title>
      <link rel="stylesheet" href="./static/hideHeader.css" />
    </Head>
    <div className="auth__form--wrapper">
      <form>
        <fieldset>
          <legend>Reset Your Password</legend>
          <div className="auth__form--group">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" />
          </div>
          <div className="auth__form--submit">
            <Link href="/reset-check">
              <a className="auth__form--button" title="sign up">
                <button>Password Reset!</button>
              </a>
            </Link>
          </div>
          <ul className="auth__form--help">
            <li>
              <Link href="/signup">
                <a title="Sign In">Don't have an account? Sign up!</a>
              </Link>
            </li>
            <li>
              <Link href="/signin">
                <a title="signin">You remember now?</a>
              </Link>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  </AuthFormStyles>
);

const ResetCheck = () => (
  <AuthFormStyles>
    <Head>
      <title>Allicin FrontEnd || Reset Check</title>
      <link rel="stylesheet" href="./static/hideHeader.css" />
    </Head>
    <div className="auth__form--wrapper">
      <h2>Help is on the way!</h2>
      <p className="auth__reset--text">
        If we recognized your email address, you will receive a password reset
        link in your email.
      </p>
      <p className="auth__reset--text">
        Make sure you check the Spam folder just in case.
      </p>
      <ul className="auth__form--help">
        <li>
          <Link href="/signin">
            <a title="signin">Return to Sign In</a>
          </Link>
        </li>
      </ul>
    </div>
  </AuthFormStyles>
);

export default ResetPassword;

export { ResetCheck };
