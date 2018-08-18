import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import TransitionRoute from './TransitionRoute';
import Menu from './Menu';
import Page1 from './Page1';
import Page2 from './Page2';
import { fadeInOut } from './transitions';
import { specificTransition } from './Page2';
import Homepage from './Homepage';

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
          <TransitionRoute key="/" path="/" exact component={Homepage} />
          <TransitionRoute
            key="/page1"
            path="/page1"
            component={Page1}
            transition={fadeInOut}
          />
          <TransitionRoute
            key="/page2"
            path="/page2"
            component={Page2}
            transition={specificTransition}
          />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
