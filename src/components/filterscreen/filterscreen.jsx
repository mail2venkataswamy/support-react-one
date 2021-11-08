import React from "react";
import "./filterscreen.scss";
import ActivityDateRange from "./activity-date-range/activity-date-range.jsx";
import Productinfo from "./product-info/product-info.jsx";
import Flagsstatus from "./flags-status/flags-status.jsx";
import ResetAndButton from "./filter-and-reset/filter-and-reset.jsx";

const filterscreen = (props) => {
  return (
    <div className="filterPanel">
      <div className="filterTitleAndToggle">
        <div className="filterHeaderTitle">Filter Screen</div>
        <div className="filterToggle">{"<<"}</div>
      </div>
      <ActivityDateRange></ActivityDateRange>
      <Productinfo
        onChangeCuspinValue={props.onChangeCuspinValue}
        data={props.data}
        onClickSuggestionItem={props.onClickSuggestionItem}
      ></Productinfo>
      <Flagsstatus></Flagsstatus>
      <ResetAndButton></ResetAndButton>
    </div>
  );
};
export default filterscreen;
