import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite } from 'gsap/all';

const Wrapper = styled.div.attrs({ className: 'hidden' })`
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

export default class Page4 extends Component {
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
        <Centerer>
          <Circle color="red" className="red" innerRef={c => (this.red = c)} />
          <Circle
            color="pink"
            className="pink"
            innerRef={c => (this.pink = c)}
          />
          <Circle
            color="orange"
            className="orange"
            innerRef={c => (this.orange = c)}
          />
        </Centerer>
      </Wrapper>
    );
  }
}
