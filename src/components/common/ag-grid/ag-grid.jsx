import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Aggrid = (props) => {
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: props.gridHeight, width: props.gridWidth }}
    >
      <AgGridReact
        rowData={props.rowData}
        columnDefs={props.colDefsMedalsIncluded}
        defaultColDef={props.defaultColDef}
        //onGridReady={this.onGridReady}
        rowSelection={props.rowSelection}
        checkboxSelection={true}
        pagination={props.pagination}
        enableRangeSelection={props.enableRangeSelection}
      ></AgGridReact>
    </div>
  );
};

export default Aggrid;
