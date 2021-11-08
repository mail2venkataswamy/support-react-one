import React, { Component, useReducer } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Filterscreen from "./components/filterscreen/filterscreen.jsx";
import Mainscreen from "./components/mainscreen/mainscreen.jsx";
import Editscreen from "./components/editscreen/editscreen.jsx";
import PriceEditingContext from "./components/context/proce-editing-context.jsx";
import PriceEditingReducer from "./reducers/price-editing-reducer.jsx";
import { computeHeadingLevel } from "@testing-library/react";

const getCurrentDateTime = () => {
  let currentdate = new Date();
  let datetime =
    " " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();
  return datetime;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maintenanceScreenData: {
        isPriceRollOverrideModalOpen: false,
        PriceRollOverrideMModalWarningMessage:
          "A record must be selected to perform this action",
        selectedReviewValue: "",
        maintenanceGridData: [],
        openGridMustSelectedModal: false,
        gridMustBePopulateModalWarningMessage: "Grid must be selected",
        isThresholdModalOpen: false,
        isSuspendRestartRepoModalOpen: false,
        isPublishValuedSecuritiesModalOpen: false,
        matenanceDataLastPublishDate: getCurrentDateTime(),
      },
      editDashboardData: { showEditDashboardGrid: true },
      filterPanelData: {
        cuspinSearchValue: "",
        cuspinData: [
          { id: 1, value: "AA001200" },
          { id: 2, value: "AA001201" },
          { id: 3, value: "AA001202" },
          { id: 4, value: "AA001203" },
          { id: 5, value: "AB001204" },
          { id: 6, value: "BB001205" },
          { id: 7, value: "BA001206" },
          { id: 8, value: "CC001207" },
          { id: 9, value: "BC001208" },
          { id: 10, value: "CA001209" },
        ],
        cuspinSuggestionResult: [],
        cuspinValue: "",
      },
    };
    this.onChangeCuspinValue = this.onChangeCuspinValue.bind(this);
  }

  onClickPriceRollOverrideButton = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPriceRollOverrideModalOpen = !maintenanceScreenData.isPriceRollOverrideModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };
  closePriceRollOverrideModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPriceRollOverrideModalOpen = !maintenanceScreenData.isPriceRollOverrideModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };

  onChangeCuspinValue(e) {
    let data = this.state.filterPanelData.cuspinData;
    let filterPanelData = this.state.filterPanelData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    filterPanelData.cuspinSuggestionResult = result;
    this.setState({
      filterPanelData,
    });
  }
  onSelectReview = (e) => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.selectedReviewValue = e.target.value;
    this.setState({
      maintenanceScreenData,
    });
    if (maintenanceScreenData.maintenanceGridData) {
      maintenanceScreenData.openGridMustSelectedModal = true;
      this.setState({
        maintenanceScreenData,
      });
    }
  };
  closeGridMustSelectedModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.openGridMustSelectedModal = false;
    this.setState({
      maintenanceScreenData,
    });
  };
  closeThresholdModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isThresholdModalOpen = false;
    this.setState({
      maintenanceScreenData,
    });
  };
  onClickThresholdButton = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isThresholdModalOpen = true;
    this.setState({
      maintenanceScreenData,
    });
  };
  onClickSuggestionItem = (selectedValue) => {
    alert(selectedValue);
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.cuspinValue = selectedValue;
    this.setState({
      filterPanelData,
    });
  };
  closeSuspendRestartRepoModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isSuspendRestartRepoModalOpen = false;
    this.setState({
      maintenanceScreenData,
    });
  };
  onClickSuspendRestartRepoButton = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isSuspendRestartRepoModalOpen = true;
    this.setState({
      maintenanceScreenData,
    });
  };

  closePublishValuedSecuritiesModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPublishValuedSecuritiesModalOpen = false;
    this.setState({
      maintenanceScreenData,
    });
  };
  onClickPublishValuedSecuritiesButton = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPublishValuedSecuritiesModalOpen = true;
    this.setState({
      maintenanceScreenData,
    });
  };
  toggleEditDashboardGrid = () => {
    let editDashboardData = this.state.editDashboardData;
    editDashboardData.showEditDashboardGrid = !this.state.editDashboardData
      .showEditDashboardGrid;
    this.setState({
      editDashboardData,
    });
    if (editDashboardData.showEditDashboardGrid) {
      document
        .getElementById("toggle")
        .setAttribute("style", "transform:rotate(180deg);left:4px;top:-3px");
    } else {
      document
        .getElementById("toggle")
        .setAttribute("style", "transform:rotate(360deg)");
    }
  };
  render() {
    let data = this.state;
    return (
      <div className="mainVS">
        <Filterscreen
          onChangeCuspinValue={(e) => this.onChangeCuspinValue(e)}
          data={this.state}
          onClickSuggestionItem={this.onClickSuggestionItem}
        />
        <div className="mainEdit">
          <Mainscreen
            data={data}
            onClickPriceRollOverrideButton={this.onClickPriceRollOverrideButton}
            closePriceRollOverrideModal={this.closePriceRollOverrideModal}
            onSelectReview={(e) => this.onSelectReview(e)}
            closeGridMustSelectedModal={this.closeGridMustSelectedModal}
            closeThresholdModal={this.closeThresholdModal}
            onClickThresholdButton={this.onClickThresholdButton}
            onClickSuspendRestartRepoButton={
              this.onClickSuspendRestartRepoButton
            }
            closeSuspendRestartRepoModal={this.closeSuspendRestartRepoModal}
            closePublishValuedSecuritiesModal={
              this.closePublishValuedSecuritiesModal
            }
            onClickPublishValuedSecuritiesButton={
              this.onClickPublishValuedSecuritiesButton
            }
          ></Mainscreen>
          <Editscreen
            toggleEditDashboardGrid={this.toggleEditDashboardGrid}
            data={data}
          />
        </div>
      </div>
    );
  }
}

export default App;
