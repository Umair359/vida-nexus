import React, { useState } from "react";
import "./OrderHistory .css";
const OrderHistory = () => {
  const [activeBtn, setActiveBtn] = useState("View All");
  return (
    <div className="admin-container">
      <div className="admin-service-product-filter">
        <div>
          <button
            onClick={(e) => setActiveBtn(e.target.innerHTML)}
            className={`${activeBtn === "View All" ? "active" : ""}`}
          >
            View All
          </button>
          <button
            onClick={(e) => setActiveBtn(e.target.innerHTML)}
            className={`${activeBtn === "Pending" ? "active" : ""}`}
          >
            Pending
          </button>
          <button
            onClick={(e) => setActiveBtn(e.target.innerHTML)}
            className={`${activeBtn === "Delivered" ? "active" : ""}`}
          >
            Delivered
          </button>
        </div>
        <div>
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="admin-table admin-table-order">
        <div>
          <h3>Payment Name</h3>
          <h3>Invoice No.</h3>
          <h3>Store Name</h3>
          <h3>Status</h3>
        </div>
        {activeBtn === "Pending" || activeBtn === "View All" ? (
          <div>
            <p>Product name 01</p>
            <p>INV-3654</p>
            <p>Store Name here</p>
            <button className="btn-primary btn-pending">Pending</button>
          </div>
        ) : null}
        {activeBtn === "Delivered" || activeBtn === "View All" ? (
          <div>
            <p>Product name 02</p>
            <p>INV-3654</p>
            <p>Store Name here</p>
            <button className="btn-primary btn-delivered">Delivered</button>
          </div>
        ) : null}
        {activeBtn === "Pending" || activeBtn === "View All" ? (
          <div>
            <p>Product name 03</p>
            <p>INV-3654</p>
            <p>Store Name here</p>
            <button className="btn-primary btn-pending">Pending</button>
          </div>
        ) : null}

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

export default OrderHistory;
