import React, {useState, useEffect} from 'react';
import LeftMenu from './LeftMenu';
import { Link, useParams } from "react-router-dom";
import CourseExplainStyle from "../Styles/CourseExplainStyle.module.css";
import { getCourse } from '../services/courseApi';

const CourseExplain = () => {
  const {id} =useParams();
  
  const [data, setData] = useState([]);
  //Get Course data
  const fetchApi = async () =>{
    setData(await getCourse(id));
  }
  useEffect(() => {
    fetchApi();
  },[]);
  return (
    <div className={CourseExplainStyle.MainDiv}>
      <div className={CourseExplainStyle.LeftSide}>
          <LeftMenu />
      </div>
      <div className={CourseExplainStyle.RightSide}>
        <div className={CourseExplainStyle.Main}>
          <h2>{data.name_dore}</h2>
          <p>توضیحات : {data.tozihate_dore}</p>
          <p>مدت زمان دوره : {data.zaman_dore}</p>
          <p>هزینه دوره : {data.hazine_dore} تومان</p>
          <Link className={CourseExplainStyle.btnDore} to ="/Courses">برگشت به دوره ها</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseExplain;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import CourseExplainStyle from "../Styles/CourseExplainStyle.module.css";

// const CourseExplain = () => {
//     const navigate=useNavigate();
    
//     const name = localStorage.name;
//     const tozihat = localStorage.tozihat;

//     const clickHandler =() =>{
//       navigate('/Courses')
//     }

//     return (
//       <div className={CourseExplainStyle.Main}>
//         <div className={CourseExplainStyle.Block}>
//           <p className={CourseExplainStyle.Font1}>{name}</p>
//         </div>
//         <div className={CourseExplainStyle.Block}>
//           <p className={CourseExplainStyle.Font2}>{tozihat}</p>
//         </div>
//         <div className={CourseExplainStyle.Block}>
//           <button className={CourseExplainStyle.btnDore} onClick={clickHandler}>برگشت به دوره ها</button>
//         </div>
//       </div>
//     );
// }

// export default CourseExplain;
//نحوه استفاده از هوک یوزنویگیت در خطهای 6 و 11تا13 و 24 نوشته شده است
//ضمنا ابتدا باید یوزنویگیت را مانند خط 2 ایمپورت کرد