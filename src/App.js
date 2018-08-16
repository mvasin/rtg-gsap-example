import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Menu';
import Page from './Page';

injectGlobal`
  html, body {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Menu />
          <Route path="/page1" component={Page} />
          <Route path="/page2" component={Page} />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
