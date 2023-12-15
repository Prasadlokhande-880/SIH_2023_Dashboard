import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { date } from 'yup';

const YourFormComponent: React.FC = () => {
    const [formData, setFormData] = useState({
        district: '',
        establishment: '',
        natureOfCase: '',
        reliefSought: '',
        caseType: '',
        plaintiff: '',
        contactNo: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });

        console.log(formData);
    };

    const functionsub = () => {
        // Perform actions with formData on form submission
        // For example, send formData to an API endpoint
        console.log(formData); // Placeholder: you can send data or perform actions here
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                functionsub(); // Call your custom function to handle form submission
            }}
            className="space-y-5"
        >
            {/* <div className=" bg-cyan-50 textcolo">
                <h1>District/Establishment</h1>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                <label htmlFor="district">District</label>
                <select
                    id="district"
                    className="form-select text-white-dark"
                    value={formData.district}
                    onChange={handleInputChange}
                >
                    <option>Choose...</option>
                    <option>District1</option>
                    <option>District2</option>
                </select>
                </div>
                <div>
                    <label htmlFor="establishment">Establishment</label>
                    <select
                    id="establishment"
                    className="form-select text-white-dark"
                    value={formData.establishment}
                    onChange={handleInputChange}
                    >
                        <option>Choose...</option>
                        <option>Establishment1</option>
                        <option>Establishment2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="natureOfCase">Nature of Case</label>
                    <select id="natureOfCase"
                    className="form-select text-white-dark"
                    value={formData.natureOfCase}
                    onChange={handleInputChange}
                    >
                        <option>Choose...</option>
                        <option>Nature1</option>
                        <option>Nature2</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="reliefSought">Relief Sought</label>
                <input id="reliefSought"
                type="text"
                placeholder="Relief Sought"
                className="form-input"
                value={formData.reliefSought}
                onChange={handleInputChange}
                 />
            </div>
            <div>
                <label htmlFor="caseType">Case Type</label>
                <input id="caseType"
                type="text"
                placeholder="Case Type"
                className="form-input"
                value={formData.caseType}
                onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="plaintiff">Plaintiff</label>
                <input id="plaintiff"
                type="text"
                placeholder="Plaintiff"
                className="form-input"
                value={formData.plaintiff}
                onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="contactNo">Contact No.</label>
                <input id="contactNo"
                type="text"
                placeholder="Contact No."
                className="form-input"
                value={formData.contactNo}
                onChange={handleInputChange} />
            </div>
            {/* <div>
                <label htmlFor="gridAddress1">Address</label>
                <input id="gridAddress1" type="text" placeholder="Enter Address" defaultValue="1234 Main St" className="form-input" />
            </div>
            <div>
                <label htmlFor="gridAddress2">Address2</label>
                <input id="gridAddress2" type="text" placeholder="Enter Address2" defaultValue="Apartment, studio, or floor" className="form-input" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <label htmlFor="gridCity">City</label>
                    <input id="gridCity" type="text" placeholder="Enter City" className="form-input" />
                </div>
                <div>
                    <label htmlFor="gridState">State</label>
                    <select id="gridState" className="form-select text-white-dark">
                        <option>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridZip">Zip</label>
                    <input id="gridZip" type="text" placeholder="Enter Zip" className="form-input" />
                </div>
            </div> */}
            <NavLink to="/apps/invoice/preview">
                <button type="button" className="btn btn-primary mt-6">
                    Next
                </button>
            </NavLink>
        </form>
    );
};

export default YourFormComponent;
