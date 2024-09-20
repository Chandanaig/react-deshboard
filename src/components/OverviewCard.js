import React from "react";

function OverviewCard({ title, amount, change }) {
  return (
    <div className="overview-card">
      <h3>{title}</h3>
      <p className="amount">{amount}</p>
      <p className="change">{change}</p>
    </div>
  );
}

export default OverviewCard;