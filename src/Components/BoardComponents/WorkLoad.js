import React, { Fragment } from "react";
import styled from "styled-components";
function WorkLoad() {
  return (
    <Fragment>
      <Container>작업량</Container>
    </Fragment>
  );
}

export default WorkLoad;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;
`;
