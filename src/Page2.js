import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap/all';

const Wrapper = styled.div`
  display: flex;
  flex: auto;
`;

const ColorfulDiv = styled.div`
  display: flex;
  background-color: ${p => p.color};
  flex: ${p => p.flex};
  padding: 2rem;
`;

const MenuWrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding: 2rem;
`;

function Sidebar(props) {
  return (
    <ColorfulDiv color="orchid" flex={1}>
      <MenuWrapper>
        <p>Nice</p>
        <p>Good</p>
        <p>Fun</p>
      </MenuWrapper>
    </ColorfulDiv>
  );
}

export function specificTransition(node, status, done) {
  const tl = new TimelineLite({ onComplete: done });
  console.log('tl.from', tl.from);

  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      tl.from(node, 3, { opacity: 0 });
      break;
    case 'exiting':
      tl.to(node, 3, { opacity: 0 });
      break;
  }
}

export default class Page2 extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <ColorfulDiv color="powderblue" flex={2}>
          <p>This is the page 2</p>
        </ColorfulDiv>
      </Wrapper>
    );
  }
}
