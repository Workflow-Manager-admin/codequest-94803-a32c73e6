import React, { useState } from "react";

// PUBLIC_INTERFACE
function Login({ onAuth }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    if (email) {
      localStorage.setItem("access_token", "fake-jwt");
      onAuth(true);
    } else {
      setError("Email required.");
    }
  };
  return (
    <div className="auth-card-glass">
      <h2>Login</h2>
      {error && <div className="error-glass">{error}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="input-glass"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className="btn-glass" type="submit">Login with Magic Link</button>
        <span className="oauth-glass">Or login using OAuth (GitHub/GitLab/Bitbucket)</span>
      </form>
    </div>
  );
}

export default Login;
