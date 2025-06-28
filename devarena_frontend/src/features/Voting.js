import React from "react";
// PUBLIC_INTERFACE
function Voting() {
  return (
    <div className="voting-glass">
      <h2>Peer Voting</h2>
      <div className="voting-list-glass">
        <div className="voting-card-glass">
          <div>Dispute: Sam vs Anna <br />PR#104</div>
          <button className="btn-glass">Vote for Anna</button>
          <button className="btn-glass">Vote for Sam</button>
        </div>
      </div>
    </div>
  );
}
export default Voting;
