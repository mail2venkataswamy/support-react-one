import React from "react";
import "./mainscreen.scss";
import MaintenanceHeaders from "./maintenance-headers/maintenance-headers.jsx";
import Mainscreengrid from "./maintenance-grid/maintenance-grid.jsx";
const mainScreen = (props) => {
  let matenanceDataLastPublishDate = new Date();
  return (
    <div className="maintenance">
      <div className="mainscreenTitleAndToggle">
        <div className="mainscreenHeaderTitle">Maintenance Screen</div>
      </div>
      <MaintenanceHeaders
        data={props.data}
        onClickPriceRollOverrideButton={props.onClickPriceRollOverrideButton}
        closePriceRollOverrideModal={props.closePriceRollOverrideModal}
        onSelectReview={props.onSelectReview}
        closeGridMustSelectedModal={props.closeGridMustSelectedModal}
        closeThresholdModal={props.closeThresholdModal}
        onClickThresholdButton={props.onClickThresholdButton}
        onClickThresholdButton={props.onClickThresholdButton}
        onClickSuspendRestartRepoButton={props.onClickSuspendRestartRepoButton}
        closeSuspendRestartRepoModal={props.closeSuspendRestartRepoModal}
        closePublishValuedSecuritiesModal={
          props.closePublishValuedSecuritiesModal
        }
        onClickPublishValuedSecuritiesButton={
          props.onClickPublishValuedSecuritiesButton
        }
      ></MaintenanceHeaders>
      <Mainscreengrid />
      <div className="saveCancelPublishDateWrapper">
        <div className="publishDateWrapper">
          Last Published Date:
          {props.data.maintenanceScreenData.matenanceDataLastPublishDate}
        </div>
        <div className="cancelAndSaveButtonWrapper">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default mainScreen;
