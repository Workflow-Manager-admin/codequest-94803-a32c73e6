import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import "./index.css";
import ThemeToggle from "./components/ThemeToggle";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NotificationToaster from "./components/NotificationToaster";
import ProtectedRoute from "./auth/ProtectedRoute";

// Lazy load feature screens for code splitting
const Dashboard = lazy(() => import("./features/Dashboard"));
const RuleConfig = lazy(() => import("./features/RuleConfig"));
const BugPanel = lazy(() => import("./features/BugPanel"));
const Disputes = lazy(() => import("./features/Disputes"));
const Voting = lazy(() => import("./features/Voting"));
const GamifiedStats = lazy(() => import("./features/GamifiedStats"));
const Achievements = lazy(() => import("./features/Achievements"));
const RedeemCenter = lazy(() => import("./features/RedeemCenter"));
const Leaderboards = lazy(() => import("./features/Leaderboards"));
const Analytics = lazy(() => import("./features/Analytics"));
const Notifications = lazy(() => import("./features/Notifications"));
const Onboarding = lazy(() => import("./features/Onboarding"));
const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));
const NotFound = lazy(() => import("./generic/NotFound"));

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [onboarding, setOnboarding] = useState(false);
  const [auth, setAuth] = useState(!!localStorage.getItem("access_token"));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Simulate onboarding popup for first visit
  useEffect(() => {
    if (!localStorage.getItem("onboarded")) {
      setOnboarding(true);
      localStorage.setItem("onboarded", "true");
    }
  }, []);

  // Handler for toggling dark/light mode
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Handler for login
  const handleAuth = (loggedIn) => {
    setAuth(loggedIn);
    if (!loggedIn) localStorage.removeItem("access_token");
  };

  return (
    <Router>
      <div className={`devarena-root glass-bg`}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Sidebar />
        <main className="main-content-glass">
          <Header onLogout={() => handleAuth(false)} />
          <NotificationToaster />
          <Suspense fallback={<div className="loading-glass">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/login" element={<Login onAuth={handleAuth} />} />
              <Route path="/register" element={<Register onAuth={handleAuth} />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/rules"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <RuleConfig />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/bugs"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <BugPanel />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/disputes"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <Disputes />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/voting"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <Voting />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/stats"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <GamifiedStats />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/achievements"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <Achievements />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/redeem"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <RedeemCenter />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/leaderboards"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <Leaderboards />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/analytics"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <Analytics />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/notifications"
                element={
                  <ProtectedRoute isAuthenticated={auth}>
                    <Notifications />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {onboarding && <Onboarding onClose={() => setOnboarding(false)} />}
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
