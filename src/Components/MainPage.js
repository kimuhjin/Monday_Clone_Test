import React, { Fragment, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";
// import LoginUser from "../Reducers/Login";
import { FaRegBell } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

import { FaUserAlt } from "react-icons/fa";
import DashBoard from "./DashBoard";
function MainPage() {
  const User = useSelector((state) => state.LoginUser);
  const [OpenDisc, setOpenDisc] = useState("");
  const [OpenUserMenu, setOpenUserMenu] = useState(false);
  return (
    <Fragment>
      <MainContainer>
        <LeftBar>
          <LeftBarTop>
            <Logo />
            <CircleWraaper>
              <CircleHover
                onMouseEnter={(e) => setOpenDisc("알림")}
                onMouseLeave={(e) => setOpenDisc("")}
              >
                <BellIcon />
              </CircleHover>
              {OpenDisc === "알림" && <IconDisc>알림</IconDisc>}
            </CircleWraaper>
            <CircleWraaper>
              <CircleHover
                onMouseEnter={(e) => setOpenDisc("받은편지함")}
                onMouseLeave={(e) => setOpenDisc("")}
              >
                <DownloadIcon />
              </CircleHover>
              {OpenDisc === "받은편지함" && <IconDisc>받은편지함</IconDisc>}
            </CircleWraaper>
          </LeftBarTop>
          <LeftBarBottom>
            <CircleWraaper>
              <UserIconHover onClick={() => setOpenUserMenu(!OpenUserMenu)}>
                <UserIcon />
              </UserIconHover>
              {OpenUserMenu && (
                <UserInfoBox>
                  <UserName>{User}</UserName>
                </UserInfoBox>
              )}
            </CircleWraaper>
          </LeftBarBottom>
        </LeftBar>

        <DashBoard />
      </MainContainer>
    </Fragment>
  );
}

export default MainPage;
const BoxMove = () => keyframes`
from{
    transform:translateX(-10px);
    opacity:0;
}
to {
    transform:translateX(0px);
    opacity:1;
}
`;
const UserName = styled.div`
  width: 100%;
  height: 54px;
  padding: 12px 16px;
  box-sizing: border-box;
  font-size: 14px;
  color: #323338;
`;
const UserInfoBox = styled.div`
  position: absolute;
  width: 480px;
  border-radius: 8px;
  height: 200px;
  box-shadow: 0 4px 17px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
  bottom: 0;
  z-index: 9999;
  left: 48px;
  animation: ${BoxMove} 0.5s backwards;
`;
const UserIcon = styled(FaUserAlt)`
  width: 24px;
  height: 24px;
  color: white;
  pointer-events: none;
`;
const BellIcon = styled(FaRegBell)`
  width: 24px;
  height: 24px;
  color: white;
  pointer-events: none;
`;
const DownloadIcon = styled(BsDownload)`
  width: 24px;
  height: 24px;
  color: white;
  pointer-events: none;
`;

const CircleWraaper = styled.div`
  position: relative;
  outline: none;
`;
const IconDisc = styled.div`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  background-color: #5b607a;
  bottom: 0;
  left: 48px;
  border-radius: 3px;
  z-index: 9999;
  /* min-width: 100%; */
  height: 43px;
  padding: 16px;
  box-sizing: border-box;
  animation: ${BoxMove} 0.5s backwards;
`;
const LeftBarTop = styled.div``;
const LeftBarBottom = styled.div`
  padding: 15px 0px;
`;
const UserIconHover = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #00000099;
  border: 2px solid #fff;
  transition: 0.1s linear;
  &:hover {
    transform: scale(0.9);
  }
`;
const CircleHover = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: #00000099;
  }
`;
const LeftBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 66px;
  height: 100%;
  background-color: #292f4c;
`;
const Logo = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-image: url("https://cdn7.monday.com/images/logos/monday_logo_icon.png");
  background-size: 100% auto;
  background-position: center;
  background-position: no-repeat;
  margin: 15px 0px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #292f4c;
`;
