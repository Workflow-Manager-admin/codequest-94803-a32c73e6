import React from "react";
// PUBLIC_INTERFACE
function Header({ onLogout }) {
  return (
    <header className="header-glass">
      <div className="quick-actions-glass">
        {/* Quick actions (e.g., Add PR, View Repos, etc.) could go here */}
      </div>
      <div className="profile-glass">
        <span className="user-level-badge-glass"><b>Lv. 7</b></span>
        <span className="user-info-glass">Sam Dev</span>
        <button className="logout-btn-glass" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
export default Header;
