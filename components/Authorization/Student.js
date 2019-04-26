import Link from 'next/link';

const Student = props => (
  <div>
    <h2>Student</h2>
    <ul>
      <li>
        <Link href="/app">
          <a title="Take me to my homepage">Take me to my homepage</a>
        </Link>
      </li>
      <li>
        <Link href="/school">
          <a title="Find my school">Find my school</a>
        </Link>
      </li>
      <li>
        <Link href="/class">
          <a title="Find my class">Find my class</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Student;
