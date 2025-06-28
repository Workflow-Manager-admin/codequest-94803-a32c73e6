import React, { useEffect, useState } from "react";

// PUBLIC_INTERFACE
function NotificationToaster() {
  const [notifications, setNotifications] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Simulate websocket or long-poll for notifications
    const ws = new window.EventSource && new EventSource("/api/notifications");
    if (ws) {
      ws.onmessage = (event) => {
        setActive(true);
        setNotifications((prev) => [
          ...prev,
          { id: Date.now(), message: event.data }
        ]);
        setTimeout(() => setActive(false), 3000);
      };
    }
    // Cleanup
    return () => ws && ws.close();
  }, []);

  if (!active || notifications.length === 0) return null;
  const last = notifications[notifications.length - 1];

  return (
    <div className={`notification-toaster-glass ${active ? "active" : ""}`}>
      {last?.message}
    </div>
  );
}

export default NotificationToaster;
