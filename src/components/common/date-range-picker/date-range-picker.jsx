import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

function duriationOfDates(fromDate, toDate) {
  const date1 = new Date(fromDate);
  const date2 = new Date(toDate);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
function getArrayOfDates(fromDate, toDate, numberOfDays = 0) {
  let fromDates = [];
  let toDates = [];

  if (numberOfDays < 0) {
    for (let i = 0; i < Math.abs(numberOfDays); i++) {
      fromDates.push(addDays(fromDate, -i));
    }
  } else {
    let diffDays = duriationOfDates(fromDate, toDate);
    for (let i = 0; i < diffDays; i++) {
      toDates.push(addDays(fromDate, i));
    }
  }

  return numberOfDays < 0 ? fromDates : toDates;
}

const Daterangepicker = () => {
  const [fromDate, setStartDate] = useState(new Date());
  const [toDate, setEndDate] = useState(new Date());

  return (
    <>
      <div className="fromDateLabelAndPickerWrapper">
        <div className="label">From Date</div>
        <div className="datePickerWrapper">
          <DatePicker
            selected={fromDate}
            onChange={(fromDate) => setStartDate(fromDate)}
            selectsStart
            includeDates={getArrayOfDates(fromDate, toDate, -30)}
          />
        </div>
      </div>
      <div className="toDateLabelAndPickerWrapper">
        <div className="label">To Date</div>
        <div className="datePickerWrapper">
          <DatePicker
            selected={toDate}
            onChange={(toDate) => setEndDate(toDate)}
            selectsEnd
            includeDates={getArrayOfDates(fromDate, toDate)}
          />
        </div>
      </div>
    </>
  );
};
export default Daterangepicker;
