import React from "react";
import "./AdminSelector.css";
const AdminSelector = () => {
  return (
    <div className="admin-selector">
      <select name="cars" id="cars" form="carform">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <button>button</button>
    </div>
  );
};

export default AdminSelector;
