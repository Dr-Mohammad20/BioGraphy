import React, { useState, useEffect } from "react";
import CourseBox from "./CourseBox";
import LeftMenu from "./LeftMenu";
import CourseStyle from "../Styles/CourseStyle.module.css";
import { getCourses } from "../services/courseApi";

const Courses = () => {
  const [data, setData] = useState([]);
  //Get Course data
  const loadData = async () => {
    setData(await getCourses());
  };
  useEffect(() => {
    loadData();
  }, []);
  ////////////////////////////////////////////////////////////////////////

  return (
    <div className={CourseStyle.MainDiv}>
      <div className={CourseStyle.LeftSide}>
        <LeftMenu />
      </div>
      <div className={CourseStyle.RightSide}>
        <div className={CourseStyle.contentTech}>
          {data.map((item) => (
            <CourseBox key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
