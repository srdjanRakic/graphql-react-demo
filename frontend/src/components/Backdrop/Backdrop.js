import React from 'react';
import styled from "styled-components";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
`;

const backdrop = props => <StyledBackdrop />;

export default backdrop;