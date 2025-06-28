import React, { useEffect, useState } from "react";

// PUBLIC_INTERFACE
function NotificationToaster() {
  const [notifications, setNotifications] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Use EventSource (Server-Sent Events) only if implemented & available
    let ws = null;
    if (typeof window !== "undefined" && "EventSource" in window) {
      // IMPORTANT: Ensure the backend actually supports this endpoint before using it
      // If real-time notifications are not yet implemented, comment this block below.
      ws = new EventSource("/api/notifications");
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
    return () => {
      if (ws) ws.close();
    };
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
