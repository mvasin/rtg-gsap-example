import React, { Component } from 'react';
import styled from 'styled-components';

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

function Sidebar() {
  return (
    <ColorfulDiv color="Aquamarine" flex={1}>
      <MenuWrapper>
        <p>Blue</p>
        <p>Green</p>
        <p>Red</p>
      </MenuWrapper>
    </ColorfulDiv>
  );
}

export default class Page1 extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <ColorfulDiv color="MediumSeaGreen" flex={2}>
          <p>This is the page 1</p>
        </ColorfulDiv>
      </Wrapper>
    );
  }
}
