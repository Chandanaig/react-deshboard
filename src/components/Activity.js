import React from "react";

function Activity() {
  return (
    <div className="activity">
      <h3>Activity</h3>
      <div className="activity-ring">
        {/* Placeholder for the ring chart */}
        <div className="circle">Spent: $2,103.77</div>
      </div>
      <ul>
        <li>House: 32%</li>
        <li>Food: 25%</li>
        <li>Investing: 19%</li>
        <li>Online Shop: 14%</li>
        <li>Beauty: 10%</li>
      </ul>
    </div>
  );
}

export default Activity;