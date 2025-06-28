import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaRocket,
  FaTasks,
  FaBug,
  FaGavel,
  FaUsers,
  FaStar,
  FaGift,
  FaTrophy,
  FaChartBar,
  FaBell
} from "react-icons/fa";

// PUBLIC_INTERFACE
function Sidebar() {
  return (
    <nav className="sidebar-glass">
      <div className="logo-glass">DevArena</div>
      <ul className="nav-links-glass">
        <li>
          <NavLink to="/dashboard" end>
            <FaRocket /> <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/rules">
            <FaTasks /> <span>Rules</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bugs">
            <FaBug /> <span>Bugs</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/disputes">
            <FaGavel /> <span>Disputes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/voting">
            <FaUsers /> <span>Voting</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats">
            <FaStar /> <span>Credit/XP</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/achievements">
            <FaTrophy /> <span>Achievements</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/redeem">
            <FaGift /> <span>Redeem</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboards">
            <FaUsers /> <span>Leaderboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics">
            <FaChartBar /> <span>Analytics</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications">
            <FaBell /> <span>Notifications</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
