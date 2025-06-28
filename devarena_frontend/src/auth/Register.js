import React, { useState } from "react";

// PUBLIC_INTERFACE
function Register({ onAuth }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration
    if (email) {
      localStorage.setItem("access_token", "fake-jwt");
      onAuth(true);
    } else {
      setError("Email required.");
    }
  };
  return (
    <div className="auth-card-glass">
      <h2>Register</h2>
      {error && <div className="error-glass">{error}</div>}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          className="input-glass"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className="btn-glass" type="submit">Register</button>
        <span className="oauth-glass">Or register using OAuth (GitHub, GitLab, etc.)</span>
      </form>
    </div>
  );
}
export default Register;
