import React from "react";
import OverviewCard from "./OverviewCard";
import Chart from "./Chart";
import Activity from "./Activity";
import Goals from "./Goals";
import TransactionHistory from "./TransactionHistory";

function Dashboard() {
  return (
    <div className="dashboard">
     
      <div className="overview-cards">
        <OverviewCard title="Total Balance" amount="$2,324.44" change="+2.2%" />
        <OverviewCard title="Total Income" amount="$4,778.87" change="+3.8%" />
        <OverviewCard title="Total Expenses" amount="$2,103.77" change="-1.3%" />
        <OverviewCard title="Total Savings" amount="$9,500.09" change="+1.9%" />
      </div>

      <div className="main-content">
        <Chart />
        <Activity />
        <TransactionHistory />
        <Goals />
      </div>
    </div>
  );
}

export default Dashboard;