import React from 'react';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const FinalForm = () => {
  return (
    <div>
      <div className="p-5">
      <Tab.Group>
        <Tab.List className="flex gap-4">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Initial Input
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Petitioner Details
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Responder Details
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Case Details
              </button>
            )}
          </Tab>
        </Tab.List>



        <Tab.Panels>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
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
                    Submit
                </button>
            </NavLink>
        </form>





            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
            <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Petitioner:</label>
                    <input id="gridEmail" type="text" placeholder="Petitioner Name" className="form-input" />
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
            <NavLink to="/apps/invoice/add">
                <button type="button" className="btn btn-primary mt-6">
                    Submit
                </button>
            </NavLink>
        </form>
            </div>





          </Tab.Panel>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
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
                    Submit
                </button>
            </NavLink>
        </form>
            </div>
          </Tab.Panel>






          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
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
            <div>
                <label className="flex items-center mt-1 cursor-pointer">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-white-dark">Check me out</span>
                </label>
            </div>
            <button type="submit" className="btn btn-primary !mt-6">
                Submit
            </button>
        </form>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    </div>
  );
}

export default FinalForm;
