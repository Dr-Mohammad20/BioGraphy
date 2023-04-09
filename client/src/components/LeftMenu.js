import React, { Component } from "react";
import LeftMenuStyle from "../Styles/LeftMenuStyle.module.css";
import { Link } from "react-router-dom";

import avatar from "../Images/avatar.jpg";
import homeIcon from "../Images/homeIcon.png";
import teachIcon from "../Images/teachIcon.png";
import aboutUsIcon from "../Images/aboutUsIcon.png";
import contactUsIcon from "../Images/contactUsIcon.png";

class LeftMenu extends Component {
  render() {
    return (
      <div className={LeftMenuStyle.TopMenu}>
        <div className={LeftMenuStyle.menuPic}>
          <img className={LeftMenuStyle.homeMenuPic} src={avatar} alt="" />
        </div>
        <Link to="/">
          <div className={LeftMenuStyle.menuItem}>
            <img
              className={LeftMenuStyle.homeIconPic}
              src={homeIcon}
              title="خانه"
              alt="خانه"
            />
          </div>
        </Link>
        <Link to="/Courses">
          <div className={LeftMenuStyle.menuItem}>
            <img
              className={LeftMenuStyle.homeIconPic}
              src={teachIcon}
              title="دوره ها"
              alt="دوره ها"
            />
          </div>
        </Link>
        <Link to="/AboutUs">
          <div className={LeftMenuStyle.menuItem}>
            <img
              className={LeftMenuStyle.homeIconPic}
              src={aboutUsIcon}
              title="سوابق"
              alt="سوابق"
            />
          </div>
        </Link>
        <Link to="/ContactUs">
          <div className={LeftMenuStyle.menuItem}>
            <img
              className={LeftMenuStyle.homeIconPic}
              src={contactUsIcon}
              title="ارتباط با ما"
              alt="ارتباط با ما"
            />
          </div>
        </Link>
      </div>
    );
  }
}

export default LeftMenu;

//زمانیکه از تگ
//a
//برای لینک دهی در صفحات تک صفحه ای استفاده می کنیم هربار که یک بخش سایت را می آوریم صفحه ریلود می شود
//برای جلوگیری از اینکار بجای ان از تگ لینک استفاده شده است که قبل از استفاده باید آن را ایمپورت کرد
//دستور ایمپورت و تگ لینک استفاده شده در خط 2 و خطوط 16 تا 27 است
