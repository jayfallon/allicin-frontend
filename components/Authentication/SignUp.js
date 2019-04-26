import Link from 'next/link';
import Head from 'next/head';
import AuthFormStyles from './styles';

const SignUp = props => (
  <AuthFormStyles>
    <Head>
      <title>Allicin FrontEnd || Sign Up</title>
      <link rel="stylesheet" href="/static/hideHeader.css" />
    </Head>
    <div className="auth__form--wrapper">
      <form>
        <fieldset>
          <legend>Sign Up for your Free Allicin Account!</legend>
          <div className="auth__form--group">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" />
          </div>
          <div className="auth__form--group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" />
          </div>
          <div className="auth__form--group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" />
          </div>
          <div className="auth__form--group">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" />
          </div>
          <div className="auth__form--group">
            <label htmlFor="password1">Choose a Password</label>
            <input type="password" id="password1" />
          </div>
          <div className="auth__form--group">
            <label htmlFor="password2">Confirm your Password</label>
            <input type="password" id="password2" />
          </div>
          <div className="auth__form--submit">
            <Link href="/avatar">
              <a className="auth__form--button" title="sign up">
                <button>Sign Up!</button>
              </a>
            </Link>
          </div>
          <ul className="auth__form--help">
            <li>
              <Link href="/signin">
                <a title="Sign In">Already have an account? Sign in!</a>
              </Link>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  </AuthFormStyles>
);

export default SignUp;
