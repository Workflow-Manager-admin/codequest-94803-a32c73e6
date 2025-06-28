import React from "react";
import { Navigate } from "react-router-dom";

// PUBLIC_INTERFACE
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) return <Navigate to="/login" />;
  return children;
}

export default ProtectedRoute;
