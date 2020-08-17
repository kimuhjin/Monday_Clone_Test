import React, { Fragment, useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Login } from "../Reducers/Login";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const LoginFunc = useCallback((user) => dispatch(Login(user)), [dispatch]);
  const [Id, setId] = useState("");
  const LoginOnClick = () => {
    LoginFunc(Id);
    history.push("/MainPage");
  };
  return (
    <Fragment>
      <MainContainer>
        <LoginBox>
          <LoginTitle>로그인</LoginTitle>
          <Input
            placeholder="유저 이름을 입력하세요"
            value={Id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button onClick={LoginOnClick}>로그인</Button>
        </LoginBox>
      </MainContainer>
    </Fragment>
  );
}

export default LoginPage;
const Button = styled.div`
  cursor: pointer;
  outline: none;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  color: #fff;
  background-color: #0d91ca;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  outline: none;
  width: 200px;
  height: 35px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;
  &::placeholder {
    font-size: 14px;
    text-align: center;
    color: lightgray;
  }
`;
const LoginTitle = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: black;
`;
const LoginBox = styled.div`
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 300px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1080px;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
