import React from "react";
// PUBLIC_INTERFACE
function Notifications() {
  return (
    <div className="notifications-glass">
      <h2>Real-Time Notifications</h2>
      <div className="notification-feed-glass">
        {/* Example notification */}
        <div className="notification-item-glass">[Slack] Anna mentioned you in PR#44</div>
        <div className="notification-item-glass">[Discord] Max won a badge!</div>
      </div>
    </div>
  );
}
export default Notifications;
