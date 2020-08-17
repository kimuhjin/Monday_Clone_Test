import React, { Fragment } from "react";
import styled from "styled-components";
function Chart() {
  return (
    <Fragment>
      <Container>칸반</Container>
    </Fragment>
  );
}

export default Chart;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;
`;
