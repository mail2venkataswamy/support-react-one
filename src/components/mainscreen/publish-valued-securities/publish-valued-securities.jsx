import React from "react";
import Modal from "react-modal";
import "./publish-valued-securities.scss";
import Tier from "../../../components/filterscreen/tier-level/tier-level.jsx";
import Type from "../../../components/filterscreen/type/type.jsx";

let tierLevelData = [
  { label: "All", value: "All" },
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "3", value: "three" },
  { label: "4", value: "four" },
];

const PublishSecuritiesModalContent = (props) => {
  return (
    <div>
      <fieldset>
        <legend>Tiers</legend>
        <div className="label">Tier:</div>
        <Tier tierLevelData={tierLevelData}></Tier>
      </fieldset>
      <fieldset>
        <legend>Product Type</legend>
        <div className="label">Type:</div>
        <Type></Type>
      </fieldset>
      <fieldset>
        <legend>Eligibility</legend>
        <div className="label">RBH Eligible:</div>
        <label>
          <input type="checkbox" value="rbhEligible"></input>
        </label>
      </fieldset>
    </div>
  );
};

const PublishSecurities = (props) => {
  return (
    <div className="modalContentWrapper">
      <div className="headerWrapper">
        <div className="header">
          Valued Securities Suspend/Restart Repositories
        </div>
        <div className="helpAndCloseIcon">
          <div className="help">?</div>
          <div className="close">X</div>
        </div>
      </div>
      <div className="body">
        <PublishSecuritiesModalContent></PublishSecuritiesModalContent>
      </div>
      <div className="footer">
        <button id="resetButton" onClick={props.onReset}>
          Reset
        </button>
        <button id="cancelButton" onClick={props.closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const PublishSecuritiesModal = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} style={customStyles}>
      {/*       <ModalContent data={props} closeModal={props.closeModal} /> */}
      <PublishSecurities closeModal={props.closeModal}></PublishSecurities>
    </Modal>
  );
};

export { PublishSecuritiesModal as PublishSecuritiesModal };
