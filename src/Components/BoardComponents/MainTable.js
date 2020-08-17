import React, { Fragment } from "react";
import styled from "styled-components";
function MainTable() {
  return (
    <Fragment>
      <Container>메인 테이블</Container>
    </Fragment>
  );
}

export default MainTable;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;
`;
