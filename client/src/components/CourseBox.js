import React from "react";
import CourseBoxStyle from "../Styles/CourseBoxStyle.module.css";
import { Link } from "react-router-dom";

const CourseBox = ({ data }) => {
  return (
    <div className={CourseBoxStyle.itemTeach}>
      <p>{data.name_dore}</p>
      <div>
        <Link to={`/Course/CourseExplain/${data.id}`}>
          توضیحات کامل دوره و ثبت نام
        </Link>
      </div>
    </div>
  );
};

export default CourseBox;

// import CourseBoxStyle from "../Styles/CourseBoxStyle.module.css";
// import { Link } from "react-router-dom";
// import React, { Component } from "react";

// class CourseBox extends Component {
//   clickHandler = () => {
//     const { nameDore, tozihatDore } = this.props;
//     localStorage.setItem("name", `${nameDore}`);
//     localStorage.setItem("tozihat", `${tozihatDore}`);
//   };
//   render() {
//     const { nameDore, tozihatDore } = this.props;
//     return (
//       <div className={CourseBoxStyle.itemTeach} id="teach-item-1">
//         <div className={CourseBoxStyle.onvanDore}>{nameDore}</div>
//         <div className={CourseBoxStyle.tozihatDore}>{tozihatDore}</div>
//         <button className={CourseBoxStyle.btnDore} onClick={this.clickHandler}>
//           <Link to={"/Course/CourseExplain/" + nameDore} className={CourseBoxStyle.linkFont}>توضیحات کامل دوره و ثبت نام</Link>
//         </button>
//       </div>
//     );
//   }
// }

// export default CourseBox;
