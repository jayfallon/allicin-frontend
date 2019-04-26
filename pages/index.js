import Link from 'next/link';

const Index = props => (
  <>
    <h2>Welcome to Allicin</h2>
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

export default Index;
