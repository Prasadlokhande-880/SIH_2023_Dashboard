import React, { useState } from "react";
import { AxiosResponse } from "axios";
import axios from "axios";

interface ActSection {
  act: string;
  section: string;
}

const YourFormComponent: React.FC = () => {
  const initialState = {
    causeOfAction: "",
    dateOfCauseOfAction: "",
    importantInfo: "",
    prayer: "",
    valuation: 0,
    selectedState: "",
    selectedDistrict: "",
    selectedTaluka: "",
    selectedVillage: "",
    sectioandact: [] as ActSection[],
  };

  const [actSectArray, setActSectArray] = useState<ActSection[]>([]);
  const [selectedAct, setSelectedAct] = useState<string>("Choose...");
  const [section, setSection] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleActChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAct(e.target.value);
  };

  const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Validate section: only alphabets and numbers, not blank
    if (/^[A-Za-z0-9]+$/.test(value)) {
      setSection(value);
      setError("");
    } else {
      setError("Section can only contain alphabets and numbers");
    }
  };

  const handleAddActSection = () => {
    // Only add the mapping if both act and section are selected/entered
    if (selectedAct !== "Choose..." && section.trim() !== "") {
      setActSectArray((prevArray) => [
        ...prevArray,
        { act: selectedAct, section },
      ]);

      setFormValues((prev) => ({
        ...prev,
        sectioandact: actSectArray,
      }));

      // Reset the selected act and section after adding
      setSelectedAct("Choose...");
      setSection("");
    }
  };

  const handleRemoveActSection = (index: number) => {
    const updatedArray = [...actSectArray];
    updatedArray.splice(index, 1);
    setActSectArray(updatedArray);
  };

  console.log("ActSectArray:", actSectArray);

  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });

    console.log(formValues);
  };

  const sendDataToBackend = async (data: any) => {
    try {
      const response: AxiosResponse<any> = await axios.post(
        "https://your-backend-url.com/submitFormData",
        data
      );
      console.log("Data sent to the backend:", response.data);
    } catch (error: any) {
      console.error("Error sending data to the backend:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    sendDataToBackend(formValues);
  };

  return (
    <form className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gridEmail">Cause of Action</label>
          <input
            id="gridEmail"
            type="text"
            placeholder="Enter Cause of Action"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="gridPassword">Date of Cause of Action</label>
          <input
            id="gridPassword"
            type="date"
            placeholder="Enter Date of Cause of Action"
            className="form-input"
          />
        </div>
      </div>
      <div>
        <label htmlFor="gridAddress1">Important Information</label>
        <input
          id="gridAddress1"
          type="text"
          placeholder="Enter Important Information / Subject / Reason"
          defaultValue=""
          className="form-input"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gridEmail">Prayer</label>
          <input
            id="gridEmail"
            type="text"
            placeholder="Enter Prayer"
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="gridPassword">Valuation</label>
          <input
            id="gridPassword"
            type="number"
            placeholder="Enter Valuation"
            className="form-input"
          />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gridState">Act</label>
          <select
            id="gridState"
            className="form-select text-white-dark"
            value={selectedAct}
            onChange={handleActChange}
          >
            <option disabled>Choose...</option>
            <option>Penal Code1</option>
            <option>Penal Code2</option>
          </select>
        </div>

        <div>
          <label htmlFor="gridSection">Section</label>
          <input
            id="gridSection"
            type="text"
            placeholder="Enter Section"
            className={`form-input ${error ? "border-red-500" : ""}`}
            value={section}
            onChange={handleSectionChange}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div>
          <button
            type="button"
            onClick={handleAddActSection}
            className="btn btn-primary mt-2  max-w-max "
          >
            Add Act-Section
          </button>
        </div>
      </div>
      <div className="">
        {/* <h2 className="btn btn-primary mt-2 w-1/6">Act-Section Pairs:</h2> */}
        <ul className="">
          {actSectArray.map((actPair, index) => (
            <li
              className="form-input mb-4 mt-4  flex flex-row justify-between items-center "
              key={index}
            >
              Act: {actPair.act}, Section: {actPair.section}
              <button
                type="button"
                onClick={() => handleRemoveActSection(index)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-6"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button type="submit" className="btn btn-primary !mt-6">
        Submit
      </button>
    </form>
  );
};

export default YourFormComponent;
