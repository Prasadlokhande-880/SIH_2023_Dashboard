import React from 'react';
import { NavLink } from 'react-router-dom';

const YourFormComponent: React.FC = () => {
    return (
        <form className="space-y-5">
            {/* <div className=" bg-cyan-50 textcolo">
                <h1>District/Establishment</h1>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridState">District</label>
                    <select id="gridState" className="form-select text-white-dark">
                        <option>Choose...</option>
                        <option>District1</option>
                        <option>District2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">Establishment</label>
                    <select id="gridState" className="form-select text-white-dark">
                        <option>Choose...</option>
                        <option>Establishment1</option>
                        <option>Establishment2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">Nature of Case</label>
                    <select id="gridState" className="form-select text-white-dark">
                        <option>Choose...</option>
                        <option>Nature1</option>
                        <option>Nature2</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="gridEmail">Relief Sought</label>
                <input id="gridEmail" type="text" placeholder="Relief Sought" className="form-input" />
            </div>
            <div>
                <label htmlFor="gridPassword">Case Type</label>
                <input id="gridPassword" type="text" placeholder="Case Type" className="form-input" />
            </div>
            <div>
                <label htmlFor="gridEmail">Plaintiff</label>
                <input id="gridEmail" type="text" placeholder="Plaintiff" className="form-input" />
            </div>
            <div>
                <label htmlFor="gridPassword">Contact No.</label>
                <input id="gridPassword" type="text" placeholder="Contact No." className="form-input" />
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
