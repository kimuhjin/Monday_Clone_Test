import React, { Fragment, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BsTable } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import ViewRoute from "./ViewRoute";
function DashBoard() {
  const [OpenBoardPicker, setOpenBoardPicker] = useState(false);
  const [Views, setViews] = useState("메인 테이블");
  const [BoardTitleValue, setBoardTitleValue] = useState("빈 보드");
  const [BoardDiscValue, setBoardDiscValue] = useState(
    "보드 설명을 추가하세요"
  );
  console.log(Views);
  const ClickOption = (e) => {
    setViews(e.target.value);
    setOpenBoardPicker(false);
  };

  return (
    <Fragment>
      <LeftPanel></LeftPanel>
      <MainBoard>
        <RightPanel>
          <BoardHeader>
            <BoardTitle
              value={BoardTitleValue}
              onChange={(e) => setBoardTitleValue(e.target.value)}
            ></BoardTitle>

            <BoardDisc
              value={BoardDiscValue}
              onChange={(e) => setBoardDiscValue(e.target.value)}
            ></BoardDisc>

            <BoardFunc>
              <BoardSwitch onClick={() => setOpenBoardPicker(!OpenBoardPicker)}>
                <BsTable size={18} style={{ marginRight: "12px" }} />
                <SwitchTitle>{Views}</SwitchTitle>
                <MdKeyboardArrowDown size={18} style={{ marginLeft: "6px" }} />
              </BoardSwitch>
              {OpenBoardPicker && (
                <BoardPicker>
                  <PickerTitle>모든 보기</PickerTitle>
                  <PickerInput placeholder="검색 보기"></PickerInput>
                  <PickerOptions>
                    <PickerOption
                      TargetValue={Views}
                      value="메인 테이블"
                      onClick={ClickOption}
                    >
                      <BsTable size={15} style={{ marginRight: "7px" }} />
                      메인 테이블
                    </PickerOption>
                    <PickerOption
                      TargetValue={Views}
                      value="작업량"
                      onClick={ClickOption}
                      to={"/WorkLoad"}
                    >
                      <BsTable size={15} style={{ marginRight: "7px" }} />
                      작업량
                    </PickerOption>
                    <PickerOption
                      TargetValue={Views}
                      value="차트"
                      onClick={ClickOption}
                    >
                      <BsTable size={15} style={{ marginRight: "7px" }} />
                      차트
                    </PickerOption>
                    <PickerOption
                      TargetValue={Views}
                      value="칸반"
                      onClick={ClickOption}
                    >
                      <BsTable size={15} style={{ marginRight: "7px" }} />
                      칸반
                    </PickerOption>
                  </PickerOptions>
                </BoardPicker>
              )}
            </BoardFunc>
          </BoardHeader>
          {/* Board선택 라우트 */}
          <ViewRouteWraaper>
            <ViewRoute Views={Views} />
          </ViewRouteWraaper>
        </RightPanel>
      </MainBoard>
    </Fragment>
  );
}

export default DashBoard;
const BoxMove = () => keyframes`
from{
    transform:translateY(-20px);
}
to {
    transform:translateY(0px);
}
`;
const BoardDisc = styled.input`
  outline: none;
  height: 25px;
  max-width: 684px;
  font-size: 14px;
  color: #323338;
  border: none;
  padding: 0px 5px;
  box-sizing: border-box;
  width: 100%;
  font-weight: 300;
  border: 1px dashed transparent;
  &:hover {
    border: 1px dashed #d8d8d8;
  }
`;

const ViewRouteWraaper = styled.div`
  width: 100%;
  height: 100%;
`;
const PickerOption = styled.button`
  outline: none;
  cursor: pointer;
  height: 36px;
  border: none;
  width: 100%;
  text-decoration: none;
  padding: 0px 8px;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.TargetValue === props.value ? "#d9f0ff" : "white"};
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: ${(props) =>
    props.TargetValue === props.value ? "#0085ff" : "black"};
  &:hover {
    background-color: ${(props) =>
      props.TargetValue === props.value ? "#d9f0ff" : "#0085ff"};
    color: ${(props) =>
      props.TargetValue === props.value ? "#0085ff" : "white"};
  }
`;
const PickerOptions = styled.div`
  padding: 8px 0px;
  box-sizing: border-box;
`;
const PickerInput = styled.input`
  outline: none;
  height: 37px;
  width: 100%;
  border-radius: 3px;
  padding: 3px 6px;
  color: #d8d8d8;
  font-weight: 300;
  box-sizing: border-box;
  border: 1px solid #d8d8d8;
  &:hover {
    color: #d8d8d8;
    font-weight: 300;
  }
`;
const PickerTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #323338;
  font-weight: 300;
  height: 40px;
  width: 100%;
  font-size: 14px;
  margin-left: 5px;
`;
const BoardPicker = styled.div`
  position: absolute;
  top: 63px;
  left: 0;
  z-index: 999;
  width: 300px;
  height: 325px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 17px 6px rgba(0, 0, 0, 0.1);
  animation: ${BoxMove} 0.3s backwards;
`;
const SwitchTitle = styled.div`
  margin-top: 2px;
`;
const BoardSwitch = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #323338;
  &:hover {
    color: #0085ff;
  }
`;
const BoardFunc = styled.div`
  position: relative;
  height: 55px;
  padding: 8px 4px;
  margin-top: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BoardTitle = styled.input`
  outline: none;
  height: 47px;
  margin-right: 8px;
  font-size: 28px;
  color: #323338;
  border: none;
  box-sizing: border-box;
  font-weight: 600;
  border: 1px dashed transparent;
  &:hover {
    border: 1px dashed #d8d8d8;
  }
  &::placeholder {
    color: #323338;
    font-size: 28px;
    font-weight: 600;
  }
`;
const BoardHeader = styled.div`
  width: 100%;
  min-height: 165px;
  padding: 30px 30px 0px 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #c4c7d0;
  display: flex;
  flex-direction: column;
`;
const RightPanel = styled.div`
  width: 100%;
  height: 100%;
`;
const LeftPanel = styled.div`
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  width: 30px;
  height: 100%;
  background-color: white;
  border-right: 1px solid #c4c7d0;
`;

const MainBoard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: white;

  overflow: scroll;
`;
