import React from "react";
import "./CardDetails.css";
const CardDetails = () => {
  return (
    <div className="my-container">
      <form className="card-details">
        <h1>Credit Card Detail</h1>
        <div className="card-detail-container">
          <input className="card-input" type="text" placeholder="Card Number" />
          <div>
            <select className="card-month-select">
              <option>Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <select className="card-month-select">
              <option>Year</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
              <option>2018</option>
              <option>2017</option>
              <option>2016</option>
              <option>2015</option>
              <option>2014</option>
              <option>2013</option>
            </select>
          </div>
          <div>
            <input className="card-input" type="text" placeholder="CVV" />
            <p>3 or 4 digits usually found on the signature strip</p>
          </div>
          <button onClick={(e) => e.preventDefault()}>PROCEED</button>
          <button onClick={(e) => e.preventDefault()}>
            <p>Pay with</p>
            <img src="/Images/Mask Group 1.png" alt="Mask Group 1.png" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardDetails;
