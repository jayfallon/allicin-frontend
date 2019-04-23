import Link from 'next/link';

import SlidedrawerStyles from './styles';

const Slidedrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <SlidedrawerStyles className={drawerClasses}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a title="title">hello</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a title="title">hello</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a title="title">hello</a>
            </Link>
          </li>
        </ul>
      </nav>
    </SlidedrawerStyles>
  );
};

export default Slidedrawer;
