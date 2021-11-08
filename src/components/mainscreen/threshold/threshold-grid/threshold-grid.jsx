import React from "react";
import Aggrid from "../../../common/ag-grid/ag-grid.jsx";

const rowData = [];
const colDefsMedalsIncluded = [
  { field: "#", width: 60 },
  {
    width: 60,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
  },

  { field: "EditCategory", width: 300 },
  { field: "LowerBound", width: 200 },
  { field: "Threshold", width: 170 },
];
const defaultColDef = {
  initialWidth: "auto",
  sortable: true,
  resizable: true,
  filter: true,
  //headerCheckboxSelection: isFirstColumn,
  // checkboxSelection: isFirstColumn,
  rowSelection: "multiple",
};

const Thresholdgrid = () => {
  return (
    <Aggrid
      rowData={rowData}
      colDefsMedalsIncluded={colDefsMedalsIncluded}
      defaultColDef={defaultColDef}
      gridHeight={400}
      gridWidth={800}
      suppressRowClickSelection={true}
      rowSelection="multiple"
    />
  );
};
export default Thresholdgrid;
