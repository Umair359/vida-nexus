import React from "react";
import "./Invoice.css";
const Invoice = () => {
  return (
    <div className="admin-container">
      <div className="admin-table">
        <div>
          <h3>Payment From</h3>
          <h3>Payment To</h3>
          <h3>Date</h3>
          <h3>Amount</h3>
          <div className="admin-search">
            <input type="text" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.342"
              height="29.344"
              viewBox="0 0 29.342 29.344"
            >
              <g id="search_3917754" transform="translate(-0.021 0)">
                <path
                  id="Path_71905"
                  data-name="Path 71905"
                  d="M28.827,26.221l-5.68-5.682a12.843,12.843,0,1,0-2.588,2.588l5.682,5.682a1.828,1.828,0,0,0,2.586-2.586ZM12.912,22.03a9.139,9.139,0,1,1,9.139-9.139A9.139,9.139,0,0,1,12.912,22.03Z"
                  transform="translate(0 0)"
                />
              </g>
            </svg>
          </div>
        </div>
        <div>
          <p>U_ID 1</p>
          <p>P_ID Name 1</p>
          <p>10-10-2023</p>
          <p>$ 19.00</p>
          <button className="btn-primary btn-generate">Generate Invoice</button>
        </div>
        <div>
          <p>U_ID 1</p>
          <p>P_ID Name 1</p>
          <p>10-10-2023</p>
          <p>$ 19.00</p>
          <button className="btn-primary btn-generate">Generate Invoice</button>
        </div>
        <div>
          <p>U_ID 1</p>
          <p>P_ID Name 1</p>
          <p>10-10-2023</p>
          <p>$ 19.00</p>
          <button className="btn-primary btn-generate">Generate Invoice</button>
        </div>
        <button className="admin-btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              id="Icon_awesome-save"
              data-name="Icon awesome-save"
              d="M19.372,6.622,15.628,2.878a2.143,2.143,0,0,0-1.515-.628H2.143A2.143,2.143,0,0,0,0,4.393V20.107A2.143,2.143,0,0,0,2.143,22.25H17.857A2.143,2.143,0,0,0,20,20.107V8.138a2.143,2.143,0,0,0-.628-1.515ZM10,19.393a2.857,2.857,0,1,1,2.857-2.857A2.857,2.857,0,0,1,10,19.393ZM14.286,5.8v4.487a.536.536,0,0,1-.536.536H3.393a.536.536,0,0,1-.536-.536V5.643a.536.536,0,0,1,.536-.536h10.2a.536.536,0,0,1,.379.157l.155.155a.536.536,0,0,1,.157.379Z"
              transform="translate(0 -2.25)"
              fill="#fff"
            />
          </svg>
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default Invoice;
