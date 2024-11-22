import React, { useState } from "react";

import "./CustomSelect.css";

const CustomSelect = ({ label, options, value, handleChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);
    const selectedOption = options.find((option) => option.value === value);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // handleChange(e.target.value);
        console.log(option);
        // setIsOpen(false);
    };

    return (
        <div className="select-container">
            <div onClick={handleToggle} className="select-label">
                {label}
            </div>
            <ul className="select-list" type="category" name="category" id="category">
                {isOpen &&
                    options.map((option) => (
                        <li
                            key={option.id}
                            className="option"
                            style={{ color: option.color }}
                            value={option.value}
                            onClick={handleOptionClick(option)}
                        >
                            {option.value}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default CustomSelect;

// import React, { useState, useRef, useEffect } from "react";

// function CustomSelect({ options, initialValue, handleChange }) {
//     const [isOpen, setIsOpen] = useState(false);
//     const selectRef = useRef(null);
//     const styledSelectRef = useRef(null);

//     const handleClickOutside = (event) => {
//         if (selectRef.current && !selectRef.current.contains(event.target)) {
//             setIsOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener("click", handleClickOutside);
//         return () => document.removeEventListener("click", handleClickOutside);
//     }, []);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleOptionClick = (option) => {
//         setIsOpen(false);
//         styledSelectRef.current.textContent = option.text;
//         selectRef.current.value = option.value;
//         onChange && onChange(option.value); // Optional callback for onChange event
//     };

//     return (
//         <div className="select-wrapper" ref={selectRef}>
//             <div className="select-styled" ref={styledSelectRef} onClick={toggleDropdown}>
//                 {options[0].text}
//             </div>
//             {isOpen && (
//                 <ul className="select-options">
//                     {options.map((option) => (
//                         <li
//                             key={option.value}
//                             className={option.value === selectRef.current.value ? "is-selected" : ""}
//                             onClick={() => handleOptionClick(option)}
//                         >
//                             {option.text}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             <select value={selectRef.current?.value || initialValue}>
//                 {options.map((option) => (
//                     <option key={option.value} value={option.value}>
//                         {option.text}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// }

// export default CustomSelect;
