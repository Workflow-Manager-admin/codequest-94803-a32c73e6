import React from "react";
// PUBLIC_INTERFACE
function RuleConfig() {
  return (
    <div className="ruleconfig-glass">
      <h2>Rule Configuration</h2>
      <div className="ruleconfig-board-glass">
        <div className="rule-list-glass">
          <h4>Enabled Rules</h4>
          {/* Render enabled rules */}
        </div>
        <div className="rule-list-glass">
          <h4>Available Rules</h4>
          {/* Render available rules */}
        </div>
      </div>
      <div className="dragdrop-hint-glass">
        Drag rules between columns to enable/disable.
      </div>
    </div>
  );
}
export default RuleConfig;
