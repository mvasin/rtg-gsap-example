import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import RouteTransition from './RouteTransition';
import Menu from './Menu';
import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';
// import Page4 from './Page4';
// import Homepage from './Homepage';

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

// const routes = [
//   { path: '/', exact: false, component: Menu },
//   { path: '/page1', exact: false, component: Page1 },
//   { path: '/page2', exact: false, component: Page2 }
// ];

class App extends React.Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Menu />
          <Route path="/page1">
            {({ match }) => <Page1 displayed={!!match} />}
          </Route>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
