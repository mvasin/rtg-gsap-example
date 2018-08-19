import React, { Component } from 'react';
import styled from 'styled-components';
import { TimelineLite, Elastic } from 'gsap/all';
import { CustomEase } from './vendor/CustomEase';

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
  entering = () => {
    const tl = this.props.timeline || new TimelineLite();
    tl.set(this.wrapper, { x: '0' });
    tl.fromTo(
      this.red,
      2,
      { x: '-100%' },
      { x: '0%', ease: Elastic.easeOut.config(2, 0.3) }
    );
    tl.fromTo(
      this.orange,
      2,
      { x: '100%' },
      { x: '0%', ease: Elastic.easeOut.config(2, 0.3) },
      '-=1.8'
    );
    tl.fromTo(
      this.pink,
      3,
      { y: '-100%' },
      { y: '0%', ease: Elastic.easeOut.config(1, 0.1) },
      '-=1.8'
    );
    tl.call(this.props.done);
  };

  exiting = () => {
    const tl = this.props.timeline || new TimelineLite();
    tl.fromTo(
      this.wrapper,
      1,
      { x: '0' },
      {
        x: '1000',
        ease: CustomEase.create(
          'custom',
          'M0,0 C0.42,-0.504 0.182,0.834 0.448,1.024 0.579,1.116 0.752,1 1,1'
        )
      }
    );
    tl.call(this.props.done);
  };

  componentDidMount() {
    if (this.props.stage === 'entering') this.entering();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stage === this.props.stage) return;

    if (this.props.stage === 'entering') {
      this.entering();
    }

    if (this.props.stage === 'exiting') {
      this.exiting();
    }
  }

  render() {
    return (
      <Wrapper innerRef={c => (this.wrapper = c)}>
        <Centerer>
          <Circle color="red" innerRef={c => (this.red = c)} />
          <Circle color="pink" innerRef={c => (this.pink = c)} />
          <Circle color="orange" innerRef={c => (this.orange = c)} />
        </Centerer>
      </Wrapper>
    );
  }
}
