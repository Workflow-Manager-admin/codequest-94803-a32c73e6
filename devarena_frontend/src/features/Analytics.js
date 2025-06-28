import React from "react";
// PUBLIC_INTERFACE
function Analytics() {
  return (
    <div className="analytics-glass">
      <h2>Analytics</h2>
      <div className="analytics-cards-glass">
        <div className="analytic-card-glass">
          <div className="analytic-title-glass">Avg PR Review Time</div>
          <div className="big-number-glass">2.8h</div>
        </div>
        <div className="analytic-card-glass">
          <div className="analytic-title-glass">Bug Rate</div>
          <div className="big-number-glass">7%</div>
        </div>
      </div>
    </div>
  );
}
export default Analytics;
