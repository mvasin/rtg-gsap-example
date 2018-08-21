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

export default class Page2 extends Component {
  tl = this.props.tl || new TimelineLite();

  entering = () => {
    const { tl } = this;
    tl.clear();
    tl.to('.hidden', 0, { className: '-=hidden' });
    tl.set(this.wrapper, { x: '0' });
    tl.fromTo(
      '.menu',
      1,
      { x: '-200', opacity: 0 },
      {
        x: '0',
        opacity: 1
      }
    );
    tl.fromTo(
      '.content',
      1,
      { x: '200', opacity: 0 },
      {
        x: '0',
        opacity: 1
      },
      '-=0.5'
    );
    tl.call(this.props.setDone);
  };

  exiting = () => {
    const { tl } = this;
    tl.clear();

    tl.fromTo(
      this.wrapper,
      5,
      { x: '0', opacity: 1 },
      {
        x: '600',
        opacity: 0
      }
    );

    tl.call(this.props.setDone);
  };

  componentDidMount() {
    if (this.props.stage === 'entering') this.entering();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stage === this.props.stage) return;

    switch (this.props.stage) {
      case 'entering':
        this.entering();
        break;
      case 'exiting':
        this.exiting();
        break;
    }
  }

  render() {
    return (
      <Wrapper innerRef={c => (this.wrapper = c)} className="hidden">
        <Sidebar />
        <ColorfulDiv color="SteelBlue" flex={2} className="content">
          <p>This is the page 2</p>
        </ColorfulDiv>
      </Wrapper>
    );
  }
}
