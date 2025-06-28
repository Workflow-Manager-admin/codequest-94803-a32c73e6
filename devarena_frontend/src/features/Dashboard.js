import React from "react";
// PUBLIC_INTERFACE
function Dashboard() {
  return (
    <div className="dashboard-glass">
      <div className="welcome-glass">Welcome to DevArena 🎮</div>
      <div className="dashboard-row-glass">
        <div className="dashboard-card-glass primary">
          <h3>Open PRs</h3>
          <div className="big-number-glass">5</div>
        </div>
        <div className="dashboard-card-glass secondary">
          <h3>Peer Reports</h3>
          <div className="big-number-glass">2</div>
        </div>
        <div className="dashboard-card-glass accent">
          <h3>Credits</h3>
          <div className="big-number-glass">1,210</div>
        </div>
      </div>
      <div className="dashboard-row-glass">
        <div className="dashboard-shortcut-glass">📄 PRs</div>
        <div className="dashboard-shortcut-glass">🧩 Rules</div>
        <div className="dashboard-shortcut-glass">🐞 Bugs</div>
        <div className="dashboard-shortcut-glass">🏆 Leaderboard</div>
      </div>
    </div>
  );
}
export default Dashboard;
