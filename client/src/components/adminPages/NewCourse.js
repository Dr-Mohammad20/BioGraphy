import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from '../../Styles/NewCourse.module.css';
import { toast } from 'react-toastify';
import {insertCourse} from '../../services/courseApi';
//context
import {LoginContext2} from "../../context/LoginContextProvider2";

const NewCourse = () => {
  const {state } = useContext(LoginContext2);

  const [NewCourse, setNewCourse] = useState([]);

  const changeHandler = (event) => {
    setNewCourse({...NewCourse, [event.target.name] : event.target.value})
  }
  let navigate = useNavigate();
  useEffect(() => {
    if(state.user === false){
      navigate("/login");
    }
  })
//Insert New Course
const addNewCourseHandler = () => {
  if(!NewCourse.name_dore || !NewCourse.zaman_dore || !NewCourse.tozihate_dore) {
    toast.error("لطفا اطلاعات درس را به صورت کامل وارد کنید");
  } else {
      const name = NewCourse.name_dore;
      const zaman = NewCourse.zaman_dore;
      const hazine = NewCourse.hazine_dore;
      const tozihat = NewCourse.tozihate_dore;
      insertCourse(name, zaman, hazine, tozihat);
      setNewCourse({
        name_dore: "",
        zaman_dore: "",
        hazine_dore: "",
        tozihate_dore: ""
      });
      toast.success("درس جدید با موفقیت ثبت شد");
      navigate("/CourseAdmin");
  }
}
/////////////////////////////////////////////////////////////////
  return (
      <div className={Styles.Container}>
        <div className={Styles.Content}>
          <label>نام دوره</label>
          <input type="text" name='name_dore' className={Styles.InputBox} onChange={changeHandler} value={NewCourse.name_dore} />
          <label>زمان دوره</label>
          <input type="text" name='zaman_dore' className={Styles.InputBox} onChange={changeHandler} value={NewCourse.zaman_dore}/>
          <label>هزینه دوره</label>
          <input type="number" name='hazine_dore' className={Styles.InputBox} onChange={changeHandler} value={NewCourse.hazine_dore}/>
          <label>توضیحات دوره</label>
          <textarea name='tozihate_dore' className={Styles.TozihDore} onChange={changeHandler} value={NewCourse.tozihate_dore}/>
          <button onClick={addNewCourseHandler}>ثبت</button>
        </div>
      </div>
  );
};

export default NewCourse;