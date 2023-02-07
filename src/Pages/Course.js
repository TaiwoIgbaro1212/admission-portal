import React, { useEffect } from "react";
import "../Styless/Course.css";
import { useState } from "react";
import CourseTable from "./CourseTable";

const Course = () => {

  useEffect(()=>{
    localStorage.setItem("new-Edit", JSON.stringify([]));
  },[])

  const courses = JSON.parse(localStorage.getItem("new-Edit")) || '[]';
  const [edit, setEdit] = useState({
    courseCode: "",
    courseTitle: "",
    courseUnits: "",
  });

  const column = Object.keys(CourseTable[0]);

  function ThData() {
    return column.map((data) => {
      return <th key={data}>{data}</th>;
    });
  }

  const tdData = () => {
    return CourseTable.map((data) => {
      return (
        <tr>
          {column.map((v) => {
            return <td>{data[v]}</td>;
          })}
        </tr>
      );
    });
  };

  function handleSubmitForm(e) {
    e.preventDefault();
    courses.push(edit)
    console.log(courses);
    localStorage.setItem("new-Edit", JSON.stringify(courses));
  }

  return (
    <>
      <h1 className="table_title">Course Registration</h1>
      <table className="table">
        <thead>
          <tr>{ThData()}</tr>
        </thead>
        <tbody>{tdData()}</tbody>
      </table>
      <form className="edit_form" onSubmit={handleSubmitForm}>
        <h3 className="edit_title">Add Courses</h3>
        <div className="">
          <label htmlFor="">Course Code</label>
          <input
            type="text"
            name="coursecode"
            value={edit.courseCode}
            id="coursecode"
            placeholder="eg. INS105"
            onChange={(e) => setEdit({ ...edit, courseCode: e.target.value })}
          />
        </div>
        <div className="">
          <label htmlFor="">Course Title</label>
          <input
            type="text"
            name="coursetitle"
            value={edit.courseTitle}
            id="coursetitle"
            placeholder="eg. Introduction to Accounting"
            onChange={(e) => setEdit({ ...edit, courseTitle: e.target.value })}
          />
        </div>
        <div className="">
          <label htmlFor="">Course Unit</label>
          <input
            type="number"
            name="courseunit"
            value={edit.courseUnit}
            id="courseunit"
            placeholder="eg. 2"
            onChange={(e) => setEdit({ ...edit, courseUnit: e.target.value })}
          />
        </div>
        <button type="submit"> Next </button>
      </form>
    </>
  );
};

export default Course;
