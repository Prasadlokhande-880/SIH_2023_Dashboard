import React from 'react';
import { NavLink } from 'react-router-dom';

const YourFormComponent: React.FC = () => {
    return (
        <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Responder:</label>
                    <input id="gridEmail" type="text" placeholder="Responder Name" className="form-input" />
                </div>

                <div>
                    <label htmlFor="gridEmail">Gender:</label>
                    <div className="flex flex-col">
                        <label htmlFor="male" className="flex items-center cursor-pointer">
                            <input type="radio" id="male" name="gender" className="form-radio" />
                            <span>Male</span>
                        </label>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="female" className="flex items-center cursor-pointer">
                            <input type="radio" id="female" name="gender" className="form-radio" />
                            <span>Female</span>
                        </label>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="other" className="flex items-center cursor-pointer">
                            <input type="radio" id="other" name="gender" className="form-radio" />
                            <span>Other</span>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="gridAddress1">Relation</label>
                <input id="gridAddress1" type="text" placeholder="Relation" className="form-input" />
            </div>
            <div>
                <label htmlFor="gridAddress2">Date of Birth</label>
                <input id="gridAddress2" type="date" className="form-input" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <label htmlFor="gridCity">Age:</label>
                    <input id="gridCity" type="number" placeholder="Enter Age" className="form-input" />
                </div>

                <div>
                    <label htmlFor="gridState">Case</label>
                    <input id="gridCity" type="text" placeholder="Enter case" className="form-input" />
                </div>

                <div>
                    <label htmlFor="gridZip">Extra Petitioner Count</label>
                    <input id="gridZip" type="number" placeholder="Extra Petitioner Count" className="form-input" />
                </div>
            </div>

            <div>
                <label htmlFor="gridEmail">Email:</label>
                <input id="gridEmail" type="email" placeholder="Email Name" className="form-input" />
            </div>

            <div>
                <label htmlFor="gridEmail">Occupation:</label>
                <input id="gridEmail" type="text" placeholder="Occupation" className="form-input" />
            </div>

            <div>
                <label htmlFor="gridEmail">Mobile no:</label>
                <input id="gridEmail" type="number" placeholder="Mobile no" className="form-input" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">Pin Code:</label>
                    <input id="gridEmail" type="text" placeholder="Pin Code" className="form-input" />
                </div>

                <div>
                    <label htmlFor="gridState">Address</label>
                    <textarea id="gridCity" placeholder="Address" className="form-input" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">State:</label>
                    <input id="gridEmail" type="text" placeholder="State" className="form-input" />
                </div>

                <div>
                    <label htmlFor="gridEmail">District:</label>
                    <input id="gridEmail" type="text" placeholder="District" className="form-input" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">Taluka:</label>
                    <input id="gridEmail" type="text" placeholder="Taluka" className="form-input" />
                </div>

                <div>
                    <label htmlFor="gridEmail">Village:</label>
                    <input id="gridEmail" type="text" placeholder="Village" className="form-input" />
                </div>
            </div>
            <NavLink to="/apps/invoice/edit">
                <button type="button" className="btn btn-primary mt-6">
                    Next
                </button>
            </NavLink>
        </form>
    );
};

export default YourFormComponent;
