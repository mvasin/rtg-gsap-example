import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import src from './logo.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: khaki;
`;

const Logo = styled.img.attrs({ src })`
  height: 2rem;
`;

export default class extends React.Component {
  render() {
    return (
      <Wrapper {...this.props}>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3 (no transition)</Link>
        <Link to="/page4">Page 4 (complex transition)</Link>
      </Wrapper>
    );
  }
}
