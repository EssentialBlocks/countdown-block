import React from "react";

const BoxContainer = ({ wrapperStyle, boxContainerStyle, children }) => (
  <div className="eb-countdown-wrapper" style={wrapperStyle}>
    <div className="eb-countdown-container">
      <ul className="eb-countdown-items" style={boxContainerStyle}>
        {children}
      </ul>
    </div>
  </div>
);

export default BoxContainer;
