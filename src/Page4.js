import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: auto;
  justify-content: center;
  padding-top: 4.5rem;
`;

const Centerer = styled.div`
  margin: auto;
  display: flex;
`;

const Circle = styled.div`
  background-color: ${p => p.color};
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  margin: 5vw;
`;

export default class Page4 extends Component {
  render() {
    return (
      <Wrapper>
        <Centerer>
          <Circle color="red" />
          <Circle color="pink" />
          <Circle color="orange" />
        </Centerer>
      </Wrapper>
    );
  }
}
