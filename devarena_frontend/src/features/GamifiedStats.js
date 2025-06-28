import React from "react";
// PUBLIC_INTERFACE
function GamifiedStats() {
  return (
    <div className="stats-glass">
      <h2>Credit & XP Stats</h2>
      <div className="stats-cards-glass">
        <div className="stat-card-glass primary"><div>Credits</div><div className="big-number-glass">1,210</div></div>
        <div className="stat-card-glass secondary"><div>XP</div><div className="big-number-glass">8,400</div></div>
        <div className="stat-card-glass accent"><div>Level</div><div className="big-number-glass">7</div></div>
      </div>
    </div>
  );
}
export default GamifiedStats;
