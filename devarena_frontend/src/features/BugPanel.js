import React from "react";
// PUBLIC_INTERFACE
function BugPanel() {
  return (
    <div className="bugpanel-glass">
      <h2>Bug Logger</h2>
      <form className="bugform-glass">
        <textarea placeholder="Describe a bug or code issue…" className="input-glass" minLength={10} />
        <button className="btn-glass" type="submit">Log Bug</button>
      </form>
      <div className="buglist-glass">
        <div className="bugcard-glass">[PR#24] Null pointer exception (reported by Anna)</div>
      </div>
    </div>
  );
}
export default BugPanel;
