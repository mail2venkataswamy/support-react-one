import React from "react";
import Buttonwrapper from "../../common/button/button.jsx";
import "./filter-and-reset.scss";

const filterAndReset = () => {
  return (
    <div className="filterAndResetButtonWrapper">
      <Buttonwrapper id="filter-container" label="Filter"></Buttonwrapper>

      <Buttonwrapper id="reset-container" label="Reset"></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
