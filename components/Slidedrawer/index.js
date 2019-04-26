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
        <div className="inner">
          <ul>
            <li>
              {/* <Link href="/workflows">
                <a title="Workflows">Workflows</a>
              </Link> */}
            </li>
          </ul>
        </div>
      </nav>
    </SlidedrawerStyles>
  );
};

export default Slidedrawer;
