import Link from 'next/link';

const Tutor = props => (
  <div>
    <h2>Tutor</h2>
    <ul>
      <li>
        <Link href="/app/tutor">
          <a title="Take me to my homepage">Take me to my homepage</a>
        </Link>
      </li>
      <li>
        <Link href="/school">
          <a title="Find a school">Find my school</a>
        </Link>
      </li>
      <li>
        <Link href="/class">
          <a title="Find a class">Find my class</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Tutor;
