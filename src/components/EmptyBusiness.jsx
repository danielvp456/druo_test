import React from "react";
import { FaTimesCircle } from "react-icons/fa";

function EmptyBusiness() {
  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  };

  const contentStyles = {
    textAlign: "center",
  };

  const iconStyles = {
    fontSize: "5rem",
    margin: "10px auto 0",
  };

  return (
    <div className="bg-gray-900" style={containerStyles}>
      <div style={contentStyles}>
        <h1 className="font-bold text-3xl">AÚN NO HAY NEGOCIOS CREADOS</h1>
        <FaTimesCircle style={iconStyles} />
      </div>
    </div>
  );
}

export default EmptyBusiness;