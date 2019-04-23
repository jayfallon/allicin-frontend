import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Slidedrawer from './Slidedrawer';
import Header from './Header';
import Meta from './Meta';
import Theme from './Theme';
import GlobalStyle from './Global';

const StyledPage = styled.div`
  color: ${props => props.theme.bodyText};
`;

class Page extends Component {
  state = {
    SlidedrawerOpen: false,
  };

  drawToggleClickHandler = () => {
    this.setState(prevState => ({
      SlidedrawerOpen: !prevState.SlidedrawerOpen,
    }));
  };

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Slidedrawer show={this.state.SlidedrawerOpen} />
          <Header
            show={this.state.SlidedrawerOpen}
            drawClickHandler={this.drawToggleClickHandler}
          />
          <main>{this.props.children}</main>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
