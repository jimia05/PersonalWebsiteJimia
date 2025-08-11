import React from "react";

const Card = ({ children }) => (
  <div className="bg-card text-foreground rounded-xl shadow-lg p-6 mb-8 border border-border card-hover">
    {children}
  </div>
);

export default Card;