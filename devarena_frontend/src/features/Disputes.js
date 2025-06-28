import React from "react";
// PUBLIC_INTERFACE
function Disputes() {
  return (
    <div className="dispute-glass">
      <h2>Dispute Panel</h2>
      <div className="dispute-list-glass">
        <div className="dispute-card-glass">
          <b>Sam vs Anna</b>: Review dispute for PR#104<span className="dispute-status-glass">Open</span>
        </div>
      </div>
    </div>
  );
}
export default Disputes;
