import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const FinalForm = () => {

    const [formData, setFormData] = useState({
        district: '',
        establishment: '',
        natureOfCase: '',
        reliefSought: '',
        caseType: '',
        plaintiff: '',
        contactNo: '',
        petitioner: '',
        gender: '',
        relation: '',
        dob: '',
        age: 0,
        case: '',
        petitionerCount: 0,
        email: '',
        occupation: '',
        mobile: 0,
        pinCode: '',
        address: '',
        state: '',
        district2: '',
        taluka: '',
        village: '',
        Responder: '',
        gender2: '',
        relation2: '',
        dob2: '',
        age2: 0,
        case2: '',
        petitionerCount2:0,
        email2: '',
        occupation2: '',
        mobile2: 0,
        pinCode2: '',
        address2: '',
        state2: '',
        district3: '',
        taluka2: '',
        village2: '',
        causeOfAction: '',
        dateOfCauseOfAction: '',
        importantInfo: '',
        prayer: '',
        valuation: "",
        selectedState: '',
        selectedDistrict: '',
        selectedTaluka: '',
        selectedVillage: '',
        act: '',
        section: '',
    });

    const axios = require('axios');

const endpointUrl = 'https://your-backend-url.com/formData';

const getFormDataFromBackend = async () => {
    try {
        const response = await axios.get(endpointUrl);
        const formDataFromBackend = response.data;
                setFormData(formDataFromBackend);
    } catch (error) {
        console.error('Error fetching form data:', error);
    }
};

getFormDataFromBackend();



    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            gender: e.target.value
        });
    };

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
                <label htmlFor="district">district</label>
                    <select
                    id="district"
                    className="form-select text-white-dark"
                    value={formData.district}
                    onChange={handleInputChange}
                    >
                        <option>Choose...</option>
                        <option>State1</option>
                        <option>State2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">Establishment</label>
                    <select
                    id="district"
                    className="form-select text-white-dark"
                    value={formData.district}
                    onChange={handleInputChange}
                    >
                        <option>Choose...</option>
                        <option>State1</option>
                        <option>State2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">Nature of Case</label>
                    <select
                    id="district"
                    className="form-select text-white-dark"
                    value={formData.district}
                    onChange={handleInputChange}
                    >
                        <option>Choose...</option>
                        <option>State1</option>
                        <option>State2</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="gridEmail">Relief Sought</label>
                <input id="gridEmail" type="text" placeholder="Relief Sought" className="form-input" value={formData.reliefSought}/>
            </div>
            <div>
                <label htmlFor="gridPassword">Case Type</label>
                <input id="gridPassword" type="text" placeholder="Case Type" className="form-input" value={formData.caseType}/>
            </div>
            <div>
                <label htmlFor="gridEmail">Plaintiff</label>
                <input id="gridEmail" type="text" placeholder="Plaintiff" className="form-input" value={formData.plaintiff}/>
            </div>
            <div>
                <label htmlFor="gridPassword">Contact No.</label>
                <input id="gridPassword" type="text" placeholder="Contact No." className="form-input" value={formData.contactNo} />
            </div>
        </form>




            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
            <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Petitioner:</label>
                    <input id="gridEmail" type="text" placeholder="Petitioner Name" className="form-input" value={formData.petitioner} />
                </div>

                <div>
                    <label htmlFor="gridEmail">Gender:</label>
                    <input id="gridEmail" type="text" placeholder="Petitioner Name" className="form-input" value={formData.gender} />
                </div>
            </div>
            <div>
                <label htmlFor="gridAddress1">Relation</label>
                <input id="gridAddress1" type="text" placeholder="Relation" className="form-input" value={formData.relation}/>
            </div>
            <div>
                <label htmlFor="gridAddress2">Date of Birth</label>
                <input id="gridAddress2" type="date" className="form-input" value={formData.dob}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <label htmlFor="gridCity">Age:</label>
                    <input id="gridCity" type="number" placeholder="Enter Age" className="form-input" value={formData.age}/>
                </div>

                <div>
                    <label htmlFor="gridState">Case</label>
                    <input id="gridCity" type="text" placeholder="Enter case" className="form-input" value={formData.case}/>
                </div>

                <div>
                    <label htmlFor="gridZip">Extra Petitioner Count</label>
                    <input id="gridZip" type="number" placeholder="Extra Petitioner Count" className="form-input"  value={formData.petitionerCount}/>
                </div>
            </div>

            <div>
                <label htmlFor="gridEmail">Email:</label>
                <input id="gridEmail" type="email" placeholder="Email Name" className="form-input"  value={formData.email}/>
            </div>

            <div>
                <label htmlFor="gridEmail">Occupation:</label>
                <input id="gridEmail" type="text" placeholder="Occupation" className="form-input"  value={formData.occupation}/>
            </div>

            <div>
                <label htmlFor="gridEmail">Mobile no:</label>
                <input id="gridEmail" type="number" placeholder="Mobile no" className="form-input"  value={formData.mobile}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">Pin Code:</label>
                    <input id="gridEmail" type="text" placeholder="Pin Code" className="form-input"  value={formData.pinCode}/>
                </div>

                <div>
                    <label htmlFor="gridState">Address</label>
                    <textarea id="gridCity" placeholder="Address" className="form-input"  value={formData.address}/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">State:</label>
                    <input id="gridEmail" type="text" placeholder="State" className="form-input"  value={formData.state}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">District:</label>
                    <input id="gridEmail" type="text" placeholder="District" className="form-input"  value={formData.district2}/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">Taluka:</label>
                    <input id="gridEmail" type="text" placeholder="Taluka" className="form-input"  value={formData.taluka}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">Village:</label>
                    <input id="gridEmail" type="text" placeholder="Village" className="form-input"  value={formData.village}/>
                </div>
            </div>
        </form>
            </div>




          </Tab.Panel>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
            <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Responder:</label>
                    <input id="gridEmail" type="text" placeholder="Responder Name" className="form-input"  value={formData.Responder}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">Gender:</label>
                    <input id="gridEmail" type="text" placeholder="Responder Name" className="form-input"  value={formData.gender2}/>
                </div>
            </div>
            <div>
                <label htmlFor="gridAddress1">Relation</label>
                <input id="gridAddress1" type="text" placeholder="Relation" className="form-input" value={formData.relation2}/>
            </div>
            <div>
                <label htmlFor="gridAddress2">Date of Birth</label>
                <input id="gridAddress2" type="date" className="form-input" value={formData.dob2}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <label htmlFor="gridCity">Age:</label>
                    <input id="gridCity" type="number" placeholder="Enter Age" className="form-input" value={formData.age2}/>
                </div>

                <div>
                    <label htmlFor="gridState">Case</label>
                    <input id="gridCity" type="text" placeholder="Enter case" className="form-input" value={formData.case2}/>
                </div>

                <div>
                    <label htmlFor="gridZip">Extra Petitioner Count</label>
                    <input id="gridZip" type="number" placeholder="Extra Petitioner Count" className="form-input" value={formData.petitionerCount2}/>
                </div>
            </div>

            <div>
                <label htmlFor="gridEmail">Email:</label>
                <input id="gridEmail" type="email" placeholder="Email Name" className="form-input" value={formData.email2}/>
            </div>

            <div>
                <label htmlFor="gridEmail">Occupation:</label>
                <input id="gridEmail" type="text" placeholder="Occupation" className="form-input" value={formData.occupation2}/>
            </div>

            <div>
                <label htmlFor="gridEmail">Mobile no:</label>
                <input id="gridEmail" type="number" placeholder="Mobile no" className="form-input" value={formData.mobile2}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">Pin Code:</label>
                    <input id="gridEmail" type="text" placeholder="Pin Code" className="form-input" value={formData.pinCode2}/>
                </div>

                <div>
                    <label htmlFor="gridState">Address</label>
                    <textarea id="gridCity" placeholder="Address" className="form-input" value={formData.address2}/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">State:</label>
                    <input id="gridEmail" type="text" placeholder="State" className="form-input" value={formData.state2}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">District:</label>
                    <input id="gridEmail" type="text" placeholder="District" className="form-input" value={formData.district3}/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">Taluka:</label>
                    <input id="gridEmail" type="text" placeholder="Taluka" className="form-input" value={formData.taluka2}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">Village:</label>
                    <input id="gridEmail" type="text" placeholder="Village" className="form-input" value={formData.village2}/>
                </div>
            </div>
        </form>
            </div>
          </Tab.Panel>






          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
            <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Cause of Action</label>
                    <input id="gridEmail" type="text" placeholder="Enter Cause of Action" className="form-input" value={formData.causeOfAction}/>
                </div>
                <div>
                    <label htmlFor="gridPassword">Date of Cause of Action</label>
                    <input id="gridPassword" type="date" placeholder="Enter Date of Cause of Action" className="form-input" value={formData.dateOfCauseOfAction}/>
                </div>
            </div>
            <div>
                <label htmlFor="gridAddress1">Important Information</label>
                <input id="gridAddress1" type="text" placeholder="Enter Important Information / Subject / Reason" defaultValue="" className="form-input" value={formData.importantInfo}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Prayer</label>
                    <input id="gridEmail" type="text" placeholder="Enter Prayer" className="form-input" value={formData.prayer}/>
                </div>
                <div>
                    <label htmlFor="gridPassword">Valuation</label>
                    <input id="gridPassword" type="number" placeholder="Enter Valuation" className="form-input" value={formData.valuation}/>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridState">State</label>
                    <select id="gridState" className="form-select text-white-dark" value={formData.selectedState}>
                        <option>Choose...</option>
                        <option>State1</option>
                        <option>State2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">District</label>
                    <select id="gridState" className="form-select text-white-dark" value={formData.selectedDistrict}>
                        <option>Choose...</option>
                        <option>District1</option>
                        <option>District2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">Taluka</label>
                    <select id="gridState" className="form-select text-white-dark" value={formData.selectedTaluka} >
                        <option>Choose...</option>
                        <option>Taluka1</option>
                        <option>Taluka2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">Village</label>
                    <select id="gridState" className="form-select text-white-dark" value={formData.selectedVillage}>
                        <option>Choose...</option>
                        <option>Village1</option>
                        <option>Village2</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="gridPassword">Act</label>
                <input id="gridPassword" type="text" placeholder="Enter Act" className="form-input" value={formData.act}/>
            </div>
            <div>
                <label htmlFor="gridPassword">Section</label>
                <input id="gridPassword" type="text" placeholder="Enter Section" className="form-input" value={formData.section}/>
            </div>
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
