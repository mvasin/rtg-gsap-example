import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import src from './logo.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: khaki;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Logo = styled.img.attrs({ src })`
  height: 2rem;
`;

export default class extends React.Component {
  render() {
    return (
      <Wrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3 (no transition)</Link>
      </Wrapper>
    );
  }
}
