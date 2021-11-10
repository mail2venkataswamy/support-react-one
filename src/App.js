import React, { Component, useReducer } from "react";
import logo from "./logo.svg";
import "./App.scss";
import FilterPanel from "./components/filterscreen/filterscreen.jsx";
import Maintenance from "./components/mainscreen/mainscreen.jsx";
import EditDashboard from "./components/editscreen/editscreen.jsx";

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
      intialFilterPanelState: {},
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
        isFromAndStDisabled: false,
        currHistOptions: [
          { label: "CURRENT", value: "Current" },
          { label: "HISTORICAL", value: "Historical" },
        ],
        selectedCurrHistValue: { label: "CURRENT", value: "Current" },
        fromDate: new Date(),
        toDate: new Date(),
        isinData: [
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
        isinSuggestionResult: [],
        isinValue: "",
        isinSearchValue: "",
        occSymbolData: [
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
        occSymbolSuggestionResult: [],
        occSymbolValue: "",
        occSymbolSearchValue: "",
        isAllTypeChecked: false,
        typeData: [
          { label: "Common Stock", value: "commonStock", isChecked: false },
          {
            label: "Preffered Stock",
            value: "prefferedStock",
            isChecked: false,
          },
          { label: "Index", value: "index", isChecked: false },
          { label: "Corporate Debt", value: "corporateDebt", isChecked: false },
          { label: "FMS", value: "fms", isChecked: false },
        ],
        selectClearedOptions: [
          { label: "BOTH", value: "ClearedAndNonCleared" },
          { label: "Cleared", value: "Cleared" },
          { label: "Non Cleared", value: "Non Cleared" },
        ],
        selectedClearedValue: { label: "BOTH", value: "ClearedAndNonCleared" },
        selectCrossMarginOptions: [
          { label: "BOTH", value: "CrossMarginAndNonCrossMragin" },
          { label: "Cross Margin Eligible", value: "CrossMargin" },
          { label: "Non Cross Margin Eligible", value: "NonCrossMargin" },
        ],
        selectedCrossMarginValue: {
          label: "BOTH",
          value: "CrossMarginAndNonCrossMragin",
        },
        selectCurrencyOptions: [
          { label: "ALL", value: "All" },
          { label: "USD", value: "USD" },
          { label: "AUD", value: "Aud" },
          { label: "CAD", value: "Cad" },
        ],
        selectedCurrencyValue: { label: "USD", value: "USD" },
        tierLevelData: [
          { label: "1", value: "one", isChecked: false },
          { label: "2", value: "two", isChecked: false },
          { label: "3", value: "three", isChecked: false },
          { label: "4", value: "four", isChecked: false },
        ],
        isAllTireChecked: false,
        flaggedEditOptions: [
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
        ],
        selectedFlaggedEditValue: {
          label: "Final - Large Difference Vs Vender",
          value: "Final - Large Difference Vs Vender",
        },
        reviewNeededOptions: [
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
        ],
        selectedreviewNeededValue: {
          label: "Final - Large Difference Vs Vender",
          value: "Final - Large Difference Vs Vender",
        },
        isEditedRecordChecked: false,
        editedRecordValue: "",
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
    filterPanelData.cuspinSearchValue = e.target.value;
    filterPanelData.cuspinValue = e.target.value;

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
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.cuspinValue = selectedValue;
    filterPanelData.cuspinSearchValue = "";
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
  onChangeCurrHistValue = (e) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedCurrHistValue = e.target.value;
    if (e.target.value === "CURRENT") {
      filterPanelData.isFromAndStDisabled = true;
    } else {
      filterPanelData.isFromAndStDisabled = false;
    }
    this.setState({
      filterPanelData,
    });
  };
  setFromDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    console.log(filterPanelData.fromDate);
    filterPanelData.fromDate = date;
    this.setState({
      filterPanelData,
    });
  };
  setToDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    console.log(filterPanelData.toDate);
    filterPanelData.toDate = date;
    this.setState({
      filterPanelData,
    });
  };
  onClickIsinSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.isinValue = selectedValue;
    filterPanelData.isinSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onClickOccSymbolSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.occSymbolValue = selectedValue;
    filterPanelData.occSymbolSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onChangeIsinValue(e) {
    let data = this.state.filterPanelData.isinData;
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
    filterPanelData.isinSuggestionResult = result;
    filterPanelData.isinSearchValue = e.target.value;
    filterPanelData.isinValue = e.target.value;
    this.setState({
      filterPanelData,
    });
  }
  onChangeOccSymbolValue(e) {
    let data = this.state.filterPanelData.occSymbolData;
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
    filterPanelData.occSymbolSuggestionResult = result;
    filterPanelData.occSymbolSearchValue = e.target.value;
    filterPanelData.occSymbolValue = e.target.value;
    this.setState({
      filterPanelData,
    });
  }
  onAllTypeChecked = (event) => {
    let typeData = this.state.filterPanelData.typeData;
    let filterPanelData = this.state.filterPanelData;

    typeData.forEach((type) => {
      return (type.isChecked = event.target.checked);
    });
    filterPanelData.typeData = typeData;
    filterPanelData.isAllTypeChecked = !filterPanelData.isAllTypeChecked;
    this.setState({ filterPanelData });
  };

  onSelectTypeCheckbox = (event) => {
    let typeData = this.state.filterPanelData.typeData;
    let filterPanelData = this.state.filterPanelData;
    let isAllTypeChecked = false;
    let selectionCount = 0;
    typeData.forEach((type) => {
      if (type.value === event.target.value)
        type.isChecked = event.target.checked;

      if (type.isChecked) {
        selectionCount++;
      }
      isAllTypeChecked = selectionCount === typeData.length ? true : false;
    });
    filterPanelData.typeData = typeData;
    filterPanelData.isAllTypeChecked = isAllTypeChecked;
    this.setState({ filterPanelData });
  };
  onAllTireChecked = (event) => {
    let tierLevelData = this.state.filterPanelData.tierLevelData;
    let filterPanelData = this.state.filterPanelData;

    tierLevelData.forEach((tire) => {
      return (tire.isChecked = event.target.checked);
    });
    filterPanelData.tierLevelData = tierLevelData;
    filterPanelData.isAllTireChecked = !filterPanelData.isAllTireChecked;
    this.setState({ filterPanelData });
  };

  onSelectTireCheckbox = (event) => {
    let tierLevelData = this.state.filterPanelData.tierLevelData;
    let filterPanelData = this.state.filterPanelData;
    let isAllTireChecked = false;
    let selectionCount = 0;
    tierLevelData.forEach((tire) => {
      if (tire.value === event.target.value)
        tire.isChecked = event.target.checked;

      if (tire.isChecked) {
        selectionCount++;
      }
      isAllTireChecked = selectionCount === tierLevelData.length ? true : false;
    });
    filterPanelData.tierLevelData = tierLevelData;
    filterPanelData.isAllTireChecked = isAllTireChecked;
    this.setState({ filterPanelData });
  };
  onChangeClearedValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedClearedValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeCurrencyValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedCurrencyValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeCrossMarginEligibleValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedCrossMarginValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeFlaggedEditValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedFlaggedEditValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeReviewNeededValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedreviewNeededValue = selectedValue;
    this.setState({ filterPanelData });
  };

  onSelectEditedRecordValue = (e) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.editedRecordValue = e.target.value;
    filterPanelData.isEditedRecordChecked = !filterPanelData.isEditedRecordChecked;
    this.setState({ filterPanelData });
  };
  onClickFiler = () => {
    let filterPanelData = this.state.filterPanelData;
    let filterObject = {
      selectedCurrHistValue: filterPanelData.selectedCurrHistValue,
      cuspinValue: filterPanelData.cuspinValue,
      fromDate: filterPanelData.fromDate,
      toDate: filterPanelData.toDate,
      isinValue: filterPanelData.isinValue,
      occSymbolValue: filterPanelData.occSymbolValue,
      typeData: filterPanelData.typeData,
      selectedClearedValue: filterPanelData.selectedClearedValue,
      selectedCrossMarginValue: filterPanelData.selectedCrossMarginValue,
      selectedCurrencyValue: filterPanelData.selectedCurrencyValue,
      tierLevelData: filterPanelData.tierLevelData,
      selectedFlaggedEditValue: filterPanelData.selectedFlaggedEditValue,
      selectedreviewNeededValue: filterPanelData.selectedreviewNeededValue,
      isEditedRecordChecked: filterPanelData.isEditedRecordChecked,
    };
    alert(JSON.stringify(filterObject));
  };
  onClickReset = () => {
    let filterPanelData = this.state.filterPanelData;
    let intialFilterPanelState = this.state.intialFilterPanelState;
    alert(JSON.stringify(intialFilterPanelState));
    let data = { ...filterPanelData, ...intialFilterPanelState };
    console.log("final object is", data);

    //this.setState({ filterPanelData: intialFilterPanelState });
    this.setState({ filterPanelData: data });
  };

  componentDidMount() {
    let filterPanelData = this.state.filterPanelData;
    let filterObject1 = this.state.filterPanelData;
    filterPanelData.isFromAndStDisabled = true;

    let filterObject = {
      selectedCurrHistValue: filterPanelData.selectedCurrHistValue,
      cuspinValue: filterPanelData.cuspinValue,
      fromDate: filterPanelData.fromDate,
      toDate: filterPanelData.toDate,
      isinValue: filterPanelData.isinValue,
      occSymbolValue: filterPanelData.occSymbolValue,
      typeData: filterPanelData.typeData,
      selectedClearedValue: filterPanelData.selectedClearedValue,
      selectedCrossMarginValue: filterPanelData.selectedCrossMarginValue,
      selectedCurrencyValue: filterPanelData.selectedCurrencyValue,
      tierLevelData: filterPanelData.tierLevelData,
      selectedFlaggedEditValue: filterPanelData.selectedFlaggedEditValue,
      selectedreviewNeededValue: filterPanelData.selectedreviewNeededValue,
      isEditedRecordChecked: filterPanelData.isEditedRecordChecked,
      editedRecordValue: filterPanelData.editedRecordValue,
    };
    let data = { ...filterPanelData, ...filterObject };

    this.setState({
      intialFilterPanelState: data,
      filterPanelData,
    });
  }

  render() {
    let data = this.state;
    return (
      <div id="mainVS">
        <FilterPanel
          onChangeCuspinValue={(e) => this.onChangeCuspinValue(e)}
          data={this.state}
          onClickSuggestionItem={this.onClickSuggestionItem}
          onChangeCurrHistValue={(e) => this.onChangeCurrHistValue(e)}
          setFromDate={(e) => this.setFromDate(e)}
          setToDate={(e) => this.setToDate(e)}
          onChangeIsinValue={(e) => this.onChangeIsinValue(e)}
          onClickIsinSuggestionItem={this.onClickIsinSuggestionItem}
          onChangeOccSymbolValue={(e) => this.onChangeOccSymbolValue(e)}
          onClickOccSymbolSuggestionItem={this.onClickOccSymbolSuggestionItem}
          onSelectTypeCheckbox={(e) => this.onSelectTypeCheckbox(e)}
          onAllTypeChecked={(e) => this.onAllTypeChecked(e)}
          onSelectTireCheckbox={(e) => this.onSelectTireCheckbox(e)}
          onAllTireChecked={(e) => this.onAllTireChecked(e)}
          onChangeCrossMarginEligibleValue={(e) =>
            this.onChangeCrossMarginEligibleValue(e)
          }
          onChangeCurrencyValue={(e) => this.onChangeCurrencyValue(e)}
          onChangeClearedValue={(e) => this.onChangeClearedValue(e)}
          onChangeFlaggedEditValue={(e) => this.onChangeFlaggedEditValue(e)}
          onChangeReviewNeededValue={(e) => this.onChangeReviewNeededValue(e)}
          onSelectEditedRecordValue={(e) => this.onSelectEditedRecordValue(e)}
          onClickFiler={this.onClickFiler}
          onClickReset={this.onClickReset}
        />
        <div id="editMaint">
          <Maintenance
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
          ></Maintenance>
          <EditDashboard
            toggleEditDashboardGrid={this.toggleEditDashboardGrid}
            data={data}
          />
        </div>
      </div>
    );
  }
}

export default App;
