import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Slidedrawer from './Slidedrawer';
import Header from './Header';
import Meta from './Meta';
import Theme from './Theme';
import GlobalStyle from './Global';
import media from './MediaQueries';

const StyledPage = styled.div`
  color: ${props => props.theme.bodyText};
`;

const InnerDiv = styled.div`
  margin: 0 auto;
  ${media.mamabear`
      background: red;
      padding: 0 2rem;
   `}
  ${media.brotherbear`
      background: orangeRed;
      
   `}
  ${media.papabear`
      background: gray;
      
   `}
   padding: 0 calc(51.2rem / 2);
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
          <main>
            <InnerDiv>{this.props.children}</InnerDiv>
          </main>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
