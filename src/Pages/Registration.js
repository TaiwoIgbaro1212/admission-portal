import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import '../Styless/Registration.css';

const Registration = () => {
  let [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    phoneNumber: "",
    dob: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function output(e) {
    e.preventDefault();
    const personalDetails = details;
   

    const mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (details.firstName.length < 3) {
      setErrorMessage("Kindly insert your First Name")
      return ;
    } else if (details.lastName.length < 3) {
      setErrorMessage("Kindly insert your Last Name")
      return ;
    } else if (!mailRegex.test(details.email)) {
      setErrorMessage("Invalid email address")
      return ;
    } else if (details.phoneNumber.length < 11) {
      setErrorMessage("Insert your phone number")
      return ;
    } else if (details.state === "0") {
      setErrorMessage("Select a state")
      return ;
    } else if (!details.dob) {
      setErrorMessage("Date of Birth is Required")
      return ;
    }
    let age = new Date().getFullYear() - new Date(details.dob).getFullYear();
    if (age < 17) {
      setErrorMessage("must be above 18 years")
      return ;
    }
    localStorage.setItem("userDetails", JSON.stringify(personalDetails));
    navigate("/academic")
   }
  const state = [
    "---select-state---",
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  return (
    <form onSubmit={output}>
      <div className="container">
      <div className="each">
        <div className="input_box">
          <div className="insert">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name="firstname"
              value={details.firstName}
              id="firstname"
              placeholder="firstname"
              onChange={(e) =>
                setDetails({ ...details, firstName: e.target.value })
              }
            />
          </div>
          <div className="insert">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              value={details.lastName}
              name="lastname"
              id="lastname"
              placeholder="last name"
              onChange={(e) =>
                setDetails({ ...details, lastName: e.target.value })
              }
            />
          </div>
          </div>
          <div className="each">
          <div className="insert">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={details.email}
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
            />
          </div>
          <div className="insert">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              value={details.phonenumber}
              name="phonenumber"
              id="phonenumber"
              placeholder="Number"
              onChange={(e) =>
                setDetails({ ...details, phoneNumber: e.target.value })
              }
            />
          </div>
          </div>
          <div className="insert">
            <label htmlFor="">State</label>
            <select
              name=""
              id="select"
              onChange={(e) =>
                setDetails({ ...details, state: e.target.value })
              }
            >
              {state.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="insert">
            <label htmlFor="">Date Of Birth</label>
            <input
              type="date"
              id="dob"
              onChange={(e) => setDetails({ ...details, dob: e.target.value })}
            />
          </div>
          {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
          <button type="submit"> Next </button>
        </div>
      </div>
    </form>
  );
};

export default Registration;
