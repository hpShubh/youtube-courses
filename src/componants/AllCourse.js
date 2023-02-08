import React, { useState } from "react";
import Course from "./Course";

const AllCouse = () => {
  const [courses, setCourses] = useState([
    { title: "Java Course", descrption: "This is Testing" },
    { title: "Python Course", descrption: "This is Testing" },
    { title: "React Course", descrption: "This is Testing" },
  ]);

  return (
    <div>
      <h1>All cousers</h1>
      <p>List of Course are as Follow</p>
      {courses.length > 0
        ? courses.map((item, i) => <Course Course={item} key={i} />)
        : "NO Courses"}
    </div>
  );
};

export default AllCouse;
