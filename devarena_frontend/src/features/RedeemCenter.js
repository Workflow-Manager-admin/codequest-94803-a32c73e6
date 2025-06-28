import React from "react";
// PUBLIC_INTERFACE
function RedeemCenter() {
  return (
    <div className="redeem-glass">
      <h2>Redeem Center</h2>
      <div className="redeem-list-glass">
        <div className="redeem-card-glass">
          <h4>Amazon Gift Card</h4>
          <p>1000 credits</p>
          <button className="btn-glass">Redeem</button>
        </div>
        <div className="redeem-card-glass">
          <h4>Dev T-Shirt</h4>
          <p>750 credits</p>
          <button className="btn-glass">Redeem</button>
        </div>
      </div>
    </div>
  );
}
export default RedeemCenter;
