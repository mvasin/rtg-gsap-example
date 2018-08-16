import React, { Component } from 'react';
import Lorem from 'lorem-ipsum';
import styled from 'styled-components';

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
        {Lorem({ count: 7, sentenceLowerBound: 1, sentenceUpperBound: 3 })
          .split('.')
          .map(el => (
            <p>{el}</p>
          ))}
      </MenuWrapper>
    </ColorfulDiv>
  );
}

export default class extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar />
        <ColorfulDiv color="powderblue" flex={2}>
          {Lorem({ count: 50 })}
        </ColorfulDiv>
      </Wrapper>
    );
  }
}
