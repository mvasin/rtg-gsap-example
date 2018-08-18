import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({ className: 'hidden' })`
  background: orange;
  flex: auto;
  padding-top: 4.5rem;
`;

export default () => <Wrapper>Page 3. Also without transitions.</Wrapper>;
