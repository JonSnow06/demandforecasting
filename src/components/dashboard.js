import React from "react";
import Card from "./Card";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats-cards">
        <Card title="Total Balance" value="$15,700" details="12.1% Increase" />
        <Card title="Income" value="$8,500" details="6.3% Increase" />
        <Card title="Expense" value="$6,222" details="2.4% Decrease" />
      </div>
      <div className="charts">
        <div style={{ width: "80%" }}>
          <LineChart />
        </div>
        <div style={{ width: "40%", marginTop: "-65px" }}>
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
