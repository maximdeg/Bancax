import React, { useState } from "react";

import "./ModalTransaction.css";
import CustomSelect from "../CustomSelect/CustomSelect";
// import { RiCloseLine } from "react-icons/ri";

const ModalTransaction = ({ setIsOpen }) => {
    // TODO: Change all session storages for global context

    const { sources, categories } = JSON.parse(sessionStorage.getItem("user_info"));

    // const sourceOptions = sources.map((source) => ({ value: source.name, label: source.name }));
    // const categoryOptions = categories.map((category) => ({ value: category.name, label: category.name }));

    const sourceOptions = sources.map((source) => ({ value: source.name, color: source.color, id: source._id }));
    const categoryOptions = categories.map((category) => ({ value: category.name, color: category.color, id: category._id }));

    // const SourceOptions = sources.map((source) => {
    //     return (
    //         <option key={source._id} value={source.name}>
    //             {source.name}
    //         </option>
    //     );
    // });

    // const CategoryOptions = categories.map((category) => {
    //     return (
    //         <option key={category._id} value={category.name}>
    //             {category.name}
    //         </option>
    //     );
    // });

    const [source, setSource] = useState(sources[0]);
    const [category, setCategory] = useState(categories[0]);

    const handleSourceSelect = (selectedSource) => {
        setSource((prevSources) => [prevSources, selectedSource]);
    };

    const handleCategorySelect = (selectedCategory) => {
        setCategory((prevCategories) => [prevCategories, selectedCategory]);
    };

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
                            <div className="form-group select-group">
                                <CustomSelect label="Source" options={sourceOptions} value={source} handleChange={handleSourceSelect} />
                                <CustomSelect label="Category" options={categoryOptions} value={category} handleChange={handleCategorySelect} />
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
                            <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                                Cancel
                            </button>
                            <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                                Add deposit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalTransaction;
