import React from "react";
// PUBLIC_INTERFACE
function Leaderboards() {
  return (
    <div className="leaderboard-glass">
      <h2>Leaderboards</h2>
      <div className="leaderboard-toggles-glass">
        <button className="btn-glass selected">Weekly</button>
        <button className="btn-glass">Monthly</button>
        <button className="btn-glass">All-Time</button>
      </div>
      <div className="leaderboard-list-glass">
        <div className="leader-row-glass"><span>1.</span>Sam Dev <b>1210</b></div>
        <div className="leader-row-glass"><span>2.</span>Anna QA <b>1140</b></div>
        <div className="leader-row-glass"><span>3.</span>Max Reviewer <b>1080</b></div>
      </div>
    </div>
  );
}
export default Leaderboards;
