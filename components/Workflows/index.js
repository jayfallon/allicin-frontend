import Link from 'next/link';

class Workflows extends React.Component {
  render() {
    const MyWorkflows = [
      'authentication',
      'authorization',
      'courses',
      'personalization',
      'rewards',
      'scheduler',
      'search',
      'tracking',
    ];

    const items = [];

    for (const [index, value] of MyWorkflows.entries()) {
      items.push(
        <li key={index}>
          <Link href={`/workflows/${value}`}>
            <a title={value}>{value}</a>
          </Link>
        </li>
      );
    }

    return <div>{items}</div>;
  }
}

export default Workflows;
