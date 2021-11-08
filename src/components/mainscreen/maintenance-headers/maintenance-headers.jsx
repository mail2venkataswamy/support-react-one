import React, { useContext, useState } from "react";
import ButtonWrapper from "../../common/button/button.jsx";
import WarningModal from "../../common/modal/warning/warning-modal.jsx";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import Select from "../../common/select/select.jsx";
import "./maintenance-headers.scss";
import Modalpopup from "../../common/modal/modal.jsx";
import { ThresholdModal } from "../threshold/threshold.jsx";
import { SusupendRestartModal } from "../suspend-restart-repository/suspend-restart-repo-modal.jsx";
import { PublishSecuritiesModal } from "../publish-valued-securities/publish-valued-securities.jsx";
const Maintenanceheaders = (props) => {
  return (
    <div className="maintenanceHeaders">
      <div className="wrapper">
        <div className="dataHeadersButtonWrapper">
          <ButtonWrapper
            id="threshold"
            label={"Threshold"}
            onClick={props.onClickThresholdButton}
          ></ButtonWrapper>
          <ButtonWrapper
            id="supendRestart"
            label={"Supend/Restart Prices"}
            onClick={props.onClickSuspendRestartRepoButton}
          ></ButtonWrapper>
          <ButtonWrapper
            id="Publish"
            label={"Publish"}
            onClick={props.onClickPublishValuedSecuritiesButton}
          ></ButtonWrapper>
          <ButtonWrapper
            id="PriceRollOverride"
            label={"Price Roll Override"}
            onClick={props.onClickPriceRollOverrideButton}
          ></ButtonWrapper>
          <Select
            id="review"
            data={props.data.maintenanceScreenData}
            onChange={props.onSelectReview}
          ></Select>
        </div>
        <div className="showColumnsPrintRefreshExportWrapper">
          <ButtonWrapper
            id="showAllColumns"
            label={"Show All Columns"}
            onClick={props.onSelectReview}
          ></ButtonWrapper>
          <ButtonWrapper
            id="refresh"
            label={"Refresh"}
            onClick={props.onSelectReview}
          ></ButtonWrapper>
          <ButtonWrapper
            id="print"
            label={"Print"}
            onClick={props.onSelectReview}
          ></ButtonWrapper>
          <ButtonWrapper
            id="export"
            label={"Export"}
            onClick={props.onSelectReview}
          ></ButtonWrapper>
        </div>
      </div>
      <WarningModal
        isModalOpen={
          props.data.maintenanceScreenData.isPriceRollOverrideModalOpen
        }
        closeModal={props.closePriceRollOverrideModal}
        warningMessage={
          props.data.maintenanceScreenData.PriceRollOverrideMModalWarningMessage
        }
      ></WarningModal>
      <WarningModal
        isModalOpen={props.data.maintenanceScreenData.openGridMustSelectedModal}
        closeModal={props.closeGridMustSelectedModal}
        warningMessage={
          props.data.maintenanceScreenData.gridMustBePopulateModalWarningMessage
        }
      ></WarningModal>
      <Modalpopup
        isModalOpen={props.data.maintenanceScreenData.isThresholdModalOpen}
        closeModal={props.closeThresholdModal}
      ></Modalpopup>
      <ThresholdModal
        isModalOpen={props.data.maintenanceScreenData.isThresholdModalOpen}
        closeModal={props.closeThresholdModal}
      />
      <SusupendRestartModal
        isModalOpen={
          props.data.maintenanceScreenData.isSuspendRestartRepoModalOpen
        }
        closeModal={props.closeSuspendRestartRepoModal}
      />

      <PublishSecuritiesModal
        isModalOpen={
          props.data.maintenanceScreenData.isPublishValuedSecuritiesModalOpen
        }
        closeModal={props.closePublishValuedSecuritiesModal}
      ></PublishSecuritiesModal>
    </div>
  );
};

export default Maintenanceheaders;
