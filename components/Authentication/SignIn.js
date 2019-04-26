import Link from 'next/link';
import Head from 'next/head';
import AuthFormStyles from './styles';

const SignIn = props => (
  <AuthFormStyles>
    <Head>
      <title>Allicin FrontEnd || Sign In</title>
      <link rel="stylesheet" href="./static/hideHeader.css" />
    </Head>
    <div className="auth__form--wrapper">
      <form>
        <fieldset>
          <legend>Sign In to Allicin</legend>
          <div className="auth__form--group">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" />
          </div>
          <div className="auth__form--group">
            <label htmlFor="password1">Choose a Password</label>
            <input type="password" id="password1" />
          </div>
          <div className="auth__form--submit">
            <Link href="/app">
              <a className="auth__form--button" title="sign up">
                <button>Sign In!</button>
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
              <Link href="/reset-password">
                <a title="password reset">Forgot your password?</a>
              </Link>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  </AuthFormStyles>
);

export default SignIn;
