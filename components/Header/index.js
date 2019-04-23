import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

import HeaderStyles from './styles';
import Logo from './logo';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const SlidedrawerToggleStyles = styled.button`
  background-color: transparent;
  width: 4rem;
  height: 4rem;
  border: 0;
  color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`;

const SlidedrawerToggle = props => (
  <SlidedrawerToggleStyles onClick={props.click}>
    <i className="fal fa-bars" />
  </SlidedrawerToggleStyles>
);

const Header = props => {
  let toggleClass = 'nav__global--list-item toggle';
  if (props.show) {
    toggleClass = 'nav__global--list-item toggle open';
  }

  return (
    <HeaderStyles>
      <nav className="nav__global">
        <ul className="nav__global--list">
          <li className="nav__global--list-item logo">
            <Logo />
          </li>
          <li className={toggleClass}>
            <SlidedrawerToggle click={props.drawClickHandler} />
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
