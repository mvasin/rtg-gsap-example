import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap/all';

const Wrapper = styled.div.attrs({ className: 'hidden' })`
  display: flex;
  flex: auto;
`;

const ColorfulDiv = styled.div`
  display: flex;
  background-color: ${p => p.color};
  flex: ${p => p.flex};
  padding: 2rem;
  padding-top: 4.5rem;
`;

const MenuWrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding: 2rem;
`;

function Sidebar(props) {
  return (
    <ColorfulDiv color="SkyBlue" flex={1} className="menu">
      <MenuWrapper>
        <p>Nice</p>
        <p>Good</p>
        <p>Fun</p>
      </MenuWrapper>
    </ColorfulDiv>
  );
}

// export function specificTransition(tl, node, status, done) {
//   /* eslint-disable default-case */
//   switch (status) {
//     case 'entering':
//       tl.eventCallback('onComplete', done);
//       tl.play();
//       break;
//     case 'exiting':
//       if (tl.progress() === 0) tl.seek(50);
//       tl.eventCallback('onReverseComplete', done);
//       tl.reverse();
//       break;
//   }
// }

export default class Page2 extends Component {
  // tl = new TimelineLite({ paused: true, autoRemoveChildren: false });

  // componentDidMount() {
  //   const menu = document.querySelector('.menu');
  //   const content = document.querySelector('.content');

  //   if (!menu || !content) throw Error('DOM elements not found');

  //   this.tl
  //     .fromTo(menu, 1, { x: '-100%' }, { x: '0%' })
  //     .fromTo(content, 1, { x: '100%' }, { x: '0%' });
  // }

  render() {
    return (
      <Wrapper>
        <Sidebar />
        <ColorfulDiv color="SteelBlue" flex={2} className="content">
          <p>This is the page 2</p>
        </ColorfulDiv>
      </Wrapper>
    );
  }
}
