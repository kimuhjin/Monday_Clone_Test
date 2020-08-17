import React, { Fragment } from "react";
import MainTable from "./BoardComponents/MainTable";
import WorkLoad from "./BoardComponents/WorkLoad";
import Kanban from "./BoardComponents/Kanban";
import Chart from "./BoardComponents/Chart";

function ViewRoute({ Views }) {
  return (
    <Fragment>
      {Views === "메인 테이블" && <MainTable />}
      {Views === "작업량" && <WorkLoad />}
      {Views === "차트" && <Chart />}
      {Views === "칸반" && <Kanban />}
    </Fragment>
  );
}

export default ViewRoute;
