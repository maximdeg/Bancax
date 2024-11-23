import React, { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import { ImCross } from "react-icons/im";

import "./ModalTransaction.css";
import { getAuthenticatedHeaders } from "../../utils/Headers";
import { extractFormData } from "../../utils/extractFormData";
import { useForm } from "../../Hooks/useForm";
import { POST } from "../../fetching/http.fetching";
// import { RiCloseLine } from "react-icons/ri";

const ModalTransaction = ({ label, setIsModalOpen }) => {
    // TODO: Change all session storages for global context

    const { sources, categories } = JSON.parse(sessionStorage.getItem("user_info"));
    const sourceOptions = sources.map((source) => ({ value: source.name, color: source.color, id: source._id }));
    const categoryOptions = categories.map((category) => ({ value: category.name, color: category.color, id: category._id }));
    const [selectedDate, setSelectedDate] = useState(Date.now());
    const defaultDate = new Date(selectedDate).getFullYear() + "-" + new Date(selectedDate).getMonth() + "-" + new Date(selectedDate).getDate();

    const [selectedSourceState, setSelectedSourceState] = useState(sources[0]);
    const [selectedCategoryState, setSelectedCategoryState] = useState(categories[0]);

    const form_fields = {
        amount: "",
        source: "",
        category: "",
        description: "",
    };

    const { handleChangeInputValue } = useForm(form_fields);

    const handleSourceSelect = (selectedSource) => {
        setSelectedSourceState(selectedSource);
    };

    const handleCategorySelect = (selectedCategory) => {
        setSelectedCategoryState(selectedCategory);
    };

    const handleTransactionForm = async (e) => {
        try {
            e.preventDefault();
            console.log("ENTRO!");
            const form_HTML = e.target;
            const form_values = new FormData(form_HTML);
            const form_fields = {
                amount: "",
                source: selectedSourceState,
                category: selectedCategoryState,
                description: "",
                date: new Date().toISOString().split("T")[0],
            };
            const form_values_object = extractFormData(form_fields, form_values);

            // TODO: One of this form variables saves if the remember checkbox is checked, manage to save the session

            console.log(form_values_object);

            const response = await POST(`${ENV.API_URL}/api/v1/transactions`, {
                headers: getAuthenticatedHeaders(),
                body: JSON.stringify(form_values_object),
            });

            console.log({ response });
            // setIsModalOpen(false);
        } catch (err) {
            console.error(err.message);
            // TODO: SHOW ERROR MESSAGE HERE
        }
    };

    return (
        <>
            <div className="darkBG" onClick={() => setIsModalOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">{label}</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsModalOpen(false)}>
                        <ImCross />
                    </button>
                    <div className="modalContent">
                        <form action="" className="add-movement-form" onSubmit={(event) => handleTransactionForm(event)}>
                            <div className="form-group amount-container">
                                <label htmlFor="amount">Amount</label>
                                <input type="amount" name="amount" id="amount" onChange={handleChangeInputValue} />
                            </div>
                            <div className="form-group select-group">
                                <CustomSelect label="Source" options={sourceOptions} handleChange={handleSourceSelect} />
                                <CustomSelect label="Category" options={categoryOptions} handleChange={handleCategorySelect} />
                            </div>
                            <div className="form-group description-container">
                                <label htmlFor="description">Description</label>
                                <input type="description" name="description" id="description" onChange={handleChangeInputValue} />
                            </div>
                            <div className="form-group date-container">
                                <label htmlFor="date">Date</label>
                                <input type="date" name="date" id="date" value={selectedDate} onChange={handleChangeInputValue} />
                            </div>
                            <button type="submit" style={{ display: "none" }} />
                        </form>
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="cancelBtn" onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                            <button className="deleteBtn" type="submit">
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
