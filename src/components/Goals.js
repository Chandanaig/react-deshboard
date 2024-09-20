import React from "react";

function Goals() {
  return (
    <div className="goals">
      <h3>My Goals</h3>
      <div>
        <p>Travel: $1,000,000 / $2,000,000</p>
        <progress value="50" max="100"></progress>
      </div>
      <div>
        <p>Car: $50,000 / $80,000</p>
        <progress value="80" max="100"></progress>
      </div>
    </div>
  );
}

export default Goals;