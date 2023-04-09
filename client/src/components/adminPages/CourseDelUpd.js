import React, {useState, useEffect,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from '../../Styles/CourseDelUpd.module.css';
import { toast } from 'react-toastify';
import {getCourses , deleteCourse , updateCourse} from '../../services/courseApi';
//context
import {LoginContext2} from "../../context/LoginContextProvider2";

function CourseDelUpd() {
// States
  const {state } = useContext(LoginContext2);
  const [data, setData] = useState([]);
  const [selecetedCourse, setselecetedCourse] = useState([]);
////////////////////////////////////////////////////////////////////////
//Event Handler
  const SelecteCourseHandler = (item) => {
    setselecetedCourse({
      id: item.id,
      name_dore: item.name_dore,
      zaman_dore: item.zaman_dore,
      hazine_dore: item.hazine_dore,
      tozihate_dore: item.tozihate_dore
    })
  }
  const changeHandler = (event) =>{
    setselecetedCourse({...selecetedCourse, [event.target.name] : event.target.value})
  }
  const updateHandler = () => {
    if(!selecetedCourse.name_dore || !selecetedCourse.zaman_dore || !selecetedCourse.tozihate_dore) {
      toast.error("لطفا درس مورد نظر را برای به روز رسانی انتخاب کنید")
    } else {
        const id = selecetedCourse.id;
        const name = selecetedCourse.name_dore;
        const zaman = selecetedCourse.zaman_dore;
        const hazine = selecetedCourse.hazine_dore;
        const tozihat = selecetedCourse.tozihate_dore;
        updateCourse(id, name, zaman, hazine, tozihat);
        setselecetedCourse({
          id: "",
          name_dore: "",
          zaman_dore: "",
          hazine_dore: "",
          tozihate_dore: ""
        });
        toast.success("اطلاعات درس با موفقیت به روز رسانی شد");
      }
  }
  const deleteHandler = (id) => {
    if(!id) {
      toast.error("لطفا درس مورد نظر را برای حذف انتخاب کنید")
    } else {
        deleteCourse(id);
        setselecetedCourse({
          id: "",
          name_dore: "",
          zaman_dore: "",
          hazine_dore: "",
          tozihate_dore: ""
        });
        toast.success("درس با موفقیت حذف شد");
    }
  }
////////////////////////////////////////////////////////////////////////
//Get Course data
let navigate = useNavigate();
  useEffect(() => {
    if(state.user === false){
      navigate("/login");
    }
    const fetchApi = async () =>{
      setData(await getCourses());
    }
    fetchApi();
  });
////////////////////////////////////////////////////////////////////////
  return (
    <div className={Styles.Container}>
      <div className={Styles.LeftContent}>
        <div className={Styles.inputContainer}>
          <label>نام دوره</label>
          <input type="text" name='name_dore' className={Styles.InputBox} onChange={changeHandler} value={selecetedCourse.name_dore}/>
          <label>زمان دوره</label>
          <input type="text" name='zaman_dore' className={Styles.InputBox} onChange={changeHandler} value={selecetedCourse.zaman_dore}/>
          <label>هزینه دوره</label>
          <input type="text" name='hazine_dore' className={Styles.InputBox} onChange={changeHandler} value={selecetedCourse.hazine_dore}/>
          <label>توضیحات دوره</label>
          <textarea name='tozihate_dore' className={Styles.TozihDore} onChange={changeHandler} value={selecetedCourse.tozihate_dore}/>
        </div>

        <div className={Styles.buttonContainer}>
          <button onClick={updateHandler}>به روز رسانی</button>
          <button onClick={() => {deleteHandler(selecetedCourse.id)}}>حذف</button>
        </div>
      </div>
      <div className={Styles.RightContent}>
        {data.map((item) => (
          <div className={Styles.showCourse} onClick={() => SelecteCourseHandler(item)}>
            <p>نام دوره : {item.name_dore}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDelUpd;