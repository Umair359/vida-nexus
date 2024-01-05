import React from "react";
import "./Practitioner.css";
import PractionerCard from "../../Components/PractionerCard/PractionerCard.jsx";
const Practitioner = () => {
  return (
    <div className="practionsers-container">
      <h1>List of Practioners</h1>
      <div className="practionsers">
        <PractionerCard />
        <PractionerCard />
        <PractionerCard />
        <PractionerCard />
        <PractionerCard />
        <PractionerCard />
        <PractionerCard />
        <PractionerCard />
        <PractionerCard />
        <PractionerCard />
        <PractionerCard />
        <PractionerCard />
      </div>
    </div>
  );
};

export default Practitioner;
