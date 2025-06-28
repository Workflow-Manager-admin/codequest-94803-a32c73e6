import React from "react";
// PUBLIC_INTERFACE
function Onboarding({ onClose }) {
  return (
    <div className="onboarding-overlay-glass" onClick={onClose}>
      <div className="onboarding-modal-glass" onClick={e => e.stopPropagation()}>
        <h2>Welcome to DevArena!</h2>
        <p>
          Level up your code reviews with:<br />
          <ul>
            <li>Dashboards, bug logging, & leaderboards</li>
            <li>Gamified credits & achievements</li>
            <li>Glassmorphic, modern UI</li>
            <li>Real-time notifications (Slack/Discord/PRs)</li>
          </ul>
        </p>
        <button className="btn-glass" onClick={onClose}>Let's Go!</button>
      </div>
    </div>
  );
}
export default Onboarding;
