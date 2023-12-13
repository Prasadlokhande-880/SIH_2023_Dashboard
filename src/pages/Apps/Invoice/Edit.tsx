import React from 'react';

const YourFormComponent: React.FC = () => {
    return (
        <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Cause of Action</label>
                    <input id="gridEmail" type="text" placeholder="Enter Cause of Action" className="form-input" />
                </div>
                <div>
                    <label htmlFor="gridPassword">Date of Cause of Action</label>
                    <input id="gridPassword" type="date" placeholder="Enter Date of Cause of Action" className="form-input" />
                </div>
            </div>
            <div>
                <label htmlFor="gridAddress1">Important Information</label>
                <input id="gridAddress1" type="text" placeholder="Enter Important Information / Subject / Reason" defaultValue="" className="form-input" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Prayer</label>
                    <input id="gridEmail" type="text" placeholder="Enter Prayer" className="form-input" />
                </div>
                <div>
                    <label htmlFor="gridPassword">Valuation</label>
                    <input id="gridPassword" type="number" placeholder="Enter Valuation" className="form-input" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridState">State</label>
                    <select id="gridState" className="form-select text-white-dark">
                        <option>Choose...</option>
                        <option>State1</option>
                        <option>State2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">District</label>
                    <select id="gridState" className="form-select text-white-dark">
                        <option>Choose...</option>
                        <option>District1</option>
                        <option>District2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">Taluka</label>
                    <select id="gridState" className="form-select text-white-dark">
                        <option>Choose...</option>
                        <option>Taluka1</option>
                        <option>Taluka2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">Village</label>
                    <select id="gridState" className="form-select text-white-dark">
                        <option>Choose...</option>
                        <option>Village1</option>
                        <option>Village2</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="gridPassword">Act</label>
                <input id="gridPassword" type="text" placeholder="Enter Act" className="form-input" />
            </div>
            <div>
                <label htmlFor="gridPassword">Section</label>
                <input id="gridPassword" type="text" placeholder="Enter Section" className="form-input" />
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            <button type="submit" className="btn btn-primary !mt-6">
                Submit
            </button>
        </form>
    );
};

export default YourFormComponent;
