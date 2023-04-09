import React,{useContext,useEffect} from 'react';
import { Outlet , Link, useNavigate } from "react-router-dom";
import Styles from '../../Styles/CourseAdmin.module.css';
import AdminMenu from './AdminMenu';

//context
import {LoginContext2} from "../../context/LoginContextProvider2";


function CourseAdmin() {
  const {state } = useContext(LoginContext2);
  let navigate = useNavigate();
  useEffect(()=>{
    if(state.user === false){
      navigate("/login");
    }
  })
  return (
    <div className={Styles.MainDiv}>
      <div className={Styles.RightSide}>
          <AdminMenu />
      </div>
      <div className={Styles.LeftSide}>
        <div className={Styles.Container}>
          <div className={Styles.Navbar}>
            <Link to="CourseDelUpd">حذف و به روز رسانی دوره ها</Link>
            <Link to="NewCourse">اضافه کردن دوره جدید</Link>
          </div>
          <div className={Styles.Content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseAdmin;