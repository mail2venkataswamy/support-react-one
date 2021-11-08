import React from "react";
import SelectBox from "../../common/simple-dropdown/dropdown.jsx";
import "./flags-status.scss";

const Flagsstatus = () => {
  let selectClearedOptions = [
    {
      label: "Final - Large Difference Vs Vender",
      value: "Final - Large Difference Vs Vender",
    },
    {
      label: "Final - Large varience Vs previous",
      value: "Final - Large varience Vs previous",
    },
    {
      label: "Final - Missing or Zero Final Price",
      value: "Final - Missing or Zero Final Price",
    },
  ];
  let selectCrossMarginOptions = [
    {
      label: "Final - Large Difference Vs Vender",
      value: "Final - Large Difference Vs Vender",
    },
    {
      label: "Final - Large varience Vs previous",
      value: "Final - Large varience Vs previous",
    },
    {
      label: "Final - Missing or Zero Final Price",
      value: "Final - Missing or Zero Final Price",
    },
  ];

  return (
    <>
      <fieldset>
        <legend>Flags And status Filter</legend>

        <div className="labelAndFlaggedWrapper">
          <div className="flaggedEditLabel">Flagged Edits:</div>
          <div className="flaggedEditwrapper">
            <SelectBox type="single" options={selectClearedOptions}></SelectBox>
          </div>
        </div>
        <p></p>
        <div className="labelAndReviewNeededWrapper">
          <div className="reviewNeededLabel">Review Needed:</div>
          <div className="reviewNeededWrapper">
            <SelectBox
              type="single"
              options={selectCrossMarginOptions}
            ></SelectBox>
          </div>
        </div>
        <div className="editedRecordsWrapper">
          <label>
            <input id={"editedRecord"} type="checkbox"></input>
            {"Edited Records"}
          </label>
        </div>
      </fieldset>
    </>
  );
};
export default Flagsstatus;
