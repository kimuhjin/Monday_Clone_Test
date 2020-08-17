import React, { Fragment } from "react";
import styled from "styled-components";
function Kanban() {
  return (
    <Fragment>
      <Container>칸반</Container>
    </Fragment>
  );
}

export default Kanban;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;
`;
