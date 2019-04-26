import Link from 'next/link';

const SchoolPage = props => (
  <div>
    <h2>School</h2>
    <Link href="/class">
      <a title="Class page">Class</a>
    </Link>
  </div>
);

export default SchoolPage;
