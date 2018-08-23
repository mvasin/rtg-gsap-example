import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring, Transition, animated, config } from 'react-spring';

const Wrapper = styled.div`
  display: flex;
  flex: auto;
  ${p => (p.active ? '' : 'display: none')};
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

function Sidebar({ active }) {
  return (
    <Spring
      config={config.slow}
      from={{ y: '100%' }}
      to={{ y: active ? '0%' : '100%' }}
    >
      {styles => (
        <ColorfulDiv color="SkyBlue" flex={1}>
          <MenuWrapper style={{ transform: `translateY(${styles.y})` }}>
            <p>Nice</p>
            <p>Good</p>
            <p>Fun</p>
          </MenuWrapper>
        </ColorfulDiv>
      )}
    </Spring>
  );
}

export default class Page2 extends Component {
  render() {
    const { active } = this.props;
    return (
      <Wrapper {...this.props}>
        <Sidebar active={active} />
        <ColorfulDiv
          active={active}
          color="SteelBlue"
          flex={2}
          className="content"
        >
          <p>This is the page 2</p>
        </ColorfulDiv>
      </Wrapper>
    );
  }
}
