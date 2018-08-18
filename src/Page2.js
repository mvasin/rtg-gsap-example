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
    <ColorfulDiv color="orchid" flex={1} className="menu">
      <MenuWrapper>
        <p>Nice</p>
        <p>Good</p>
        <p>Fun</p>
      </MenuWrapper>
    </ColorfulDiv>
  );
}

export function specificTransition(node, status, done) {
  const tl = new TimelineLite({
    onComplete: done,
    onReverseComplete: done,
    paused: true,
    autoRemoveChildren: false
  })
    .fromTo('.menu', 4.5, { x: '-100%' }, { x: '0%' })
    .fromTo('.content', 7, { x: '100%' }, { x: '0%' });

  window.tl = tl;

  /* eslint-disable default-case */
  switch (status) {
    case 'entering':
      console.log(tl);
      tl.play();
      break;
    case 'exiting':
      console.log(tl);
      tl.reverse();
      break;
  }
}

export default class Page2 extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <ColorfulDiv color="powderblue" flex={2} className="content">
          <p>This is the page 2</p>
        </ColorfulDiv>
      </Wrapper>
    );
  }
}
