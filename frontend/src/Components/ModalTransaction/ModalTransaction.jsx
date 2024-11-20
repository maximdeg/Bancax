import React from "react";
import "./ModalTransaction.css";
// import { RiCloseLine } from "react-icons/ri";

const ModalTransaction = ({ setIsOpen }) => {
    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Deposit</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        CLOSE
                    </button>
                    <div className="modalContent">
                        <form action="" className="add-movement-form">
                            <div className="form-group">
                                <label htmlFor="amount">Amount</label>
                                <input type="amount" name="amount" id="amount" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select type="category" name="category" id="category" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="source">Source</label>
                                <select type="source" name="source" id="source" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="description" name="description" id="description" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input type="date" name="date" id="date" />
                            </div>
                        </form>
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                                Delete
                            </button>
                            <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalTransaction;
