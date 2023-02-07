import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styless/Academic.css';


const Academic = () => {
  // let [academicDetails, setAcademicDetails] = useState([]);
  let [details, setDetails] = useState({
    startYear: "",
    endYear: "",
    semester: "",
    academicSession: "",
  });

  const navigate = useNavigate();

  function next(e) {
    e.preventDefault();
    const academicDetails = details

    localStorage.setItem("userDetails", JSON.stringify(academicDetails));
    navigate("/course")

  }

  const startYear = [
    "--please select--",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
  ];
  const endYear = [
    "--please select--",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
  ];
  const semester = [
    "--please select--",
    "1st Semester",
    "2nd Semester"
  ]

  return (
    <>
      <div className="title">Academic Calender</div>
      <form onSubmit={next}>
        <div className="container">
          <div className="inbox_box">
            <div className="insert">
              <label htmlFor="">Start Year</label>
              <select
                name=""
                id="select"
                onChange={(e) =>
                  setDetails({ ...details, startYear: e.target.value })
                }
              >
                {startYear.map((startYear) => (
                  <option value={startYear}>{startYear}</option>
                ))}
              </select>
            </div>
            <div className="insert">
              <label htmlFor="">End Year</label>
              <select
                name=""
                id="select"
                onChange={(e) =>
                  setDetails({ ...details, endYear: e.target.value })
                }
              >
                {endYear.map((endYear) => (
                  <option value={endYear}>{endYear}</option>
                ))}
              </select>
            </div>
            <div className="insert">
              <label htmlFor="">Semester</label>
              <select
                name=""
                id="select"
                onChange={(e) =>
                  setDetails({ ...details, semester: e.target.value })
                }
              >
                {semester.map((semester) => (
                  <option value={semester}>{semester}</option>
                ))}
              </select>
            </div>

            <div className="insert">
            <label htmlFor="">Academic Session</label>
            <input
              type="text"
              name="academicSession"
              id="academicSession"
              placeholder="eg. 2022/2023 session"
              onChange={(e) =>
                setDetails({ ...details, academicSession: e.target.value })
              }
            />
          </div>

            <button type="submit"> Next </button>
          </div>
          
        </div>
      </form>
    </>
  );
};

export default Academic;
