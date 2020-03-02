import React from "react";
import Modal from "react-modal";
import classes from "./Styles";

const ReactModal = ({ modal, handleCloseModal, item }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={modal}
      onRequestClose={handleCloseModal}
      contentLabel="Project"
      className="Modal"
      closeTimeoutMS={500}
    >
      <div className="about">
        <div className="container" style={classes.container}>
          <div className="row">
            <div className="items col s12" style={classes.outlineNone}>
              <ul className="collection z-depth-4">
                <li
                  className="collection-header center"
                  style={classes.modalHeader}
                >
                  <h4 style={classes.modalContent}>About Project</h4>
                  <span style={classes.closeButton} onClick={handleCloseModal}>
                    Х
                  </span>
                </li>
                <li className="collection-item ">
                  <textarea
                    className="textarea-project"
                    cols="80"
                    rows="20"
                    defaultValue={item.projectinfo}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReactModal;
